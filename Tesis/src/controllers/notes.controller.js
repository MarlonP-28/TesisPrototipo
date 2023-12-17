const notesCtrl = {};
const Note = require("../models/Note");

notesCtrl.renderNoteFrom = (req, res) => {
  res.render("notes/new-notes");
};
//Esta función se encarga de crear una nueva nota en la base de datos.
notesCtrl.createNewNotes = async (req, res) => {
  const { facultad, carrera, area, subArea, tipoDocumento, subTipoDocumento, periodo, pdfArchivo, asunto, observaciones } = req.body;
  const errors = [];
  if (!facultad) {
    errors.push({ text: "Escoja una Facultad." });
  }
  if (!carrera) {
    errors.push({ text: "Escoja una carrera." });
  }
  if (!area) {
    errors.push({ text: "Escoja una área." });
  }
  if (!subArea) {
    errors.push({ text: "Escoja una subárea." });
  }
  if (!tipoDocumento) {
    errors.push({ text: "Escoja un tipo de documento." });
  }
  if (!subTipoDocumento) {
    errors.push({ text: "Escoja un subtipo de documento." });
  }
  if (!periodo) {
    errors.push({ text: "Escoja un periodo." });
  }
  if (!pdfArchivo) {
    errors.push({ text: "Seleccione un archivo Pdf." });
  }
  if (!asunto) {
    errors.push({ text: "Escriba un asunto." });
  }
  if (!observaciones) {
    errors.push({ text: "Escriba una observación." });
  }
  if (errors.length > 0)
    return res.render("notes/new-notes", {
      errors,
      facultad, 
      carrera, 
      area, 
      subArea, 
      tipoDocumento, 
      subTipoDocumento, 
      periodo, 
      pdfArchivo, 
      asunto, 
      observaciones,
      user

    });
  const newNote = new Note({ facultad, carrera, area, subArea, tipoDocumento, subTipoDocumento, periodo, pdfArchivo, asunto, observaciones  });
  newNote.user = req.user.id;
  await newNote.save();
  req.flash("success_msg", "!Archivo creado con exito¡");
  res.redirect("/notes"); //direcciona a notas automaticamente
};
//Esta función consulta todas las notas en la base de datos que pertenecen al usuario actual 
notesCtrl.renderNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user.id })//filtra las notas de un solo usuario
    //.sort({ createdAt: "desc" })
    .lean();
  res.render("notes/all-notes", { notes });
};
//Esta función se encarga de mostrar un formulario para editar una nota específica
notesCtrl.renderEditFrom = async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  if (note.user != req.user.id) {
    req.flash("error_msg", "!Not Authorized¡");
    return res.redirect("/notes");
  }
  res.render("notes/edit-notes", { note });
};
//Esta función se utiliza para actualizar una nota existente en la base de datos
notesCtrl.updateNote = async (req, res) => {
  const { facultad, carrera, area, subArea, tipoDocumento, subTipoDocumento, periodo, pdfArchivo, asunto, observaciones } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { facultad, carrera, area, subArea, tipoDocumento, subTipoDocumento, periodo, pdfArchivo, asunto, observaciones });
  req.flash("success_msg", "!Archivo actualizado con exito¡");
  res.redirect("/notes");
};
//Esta función se encarga de eliminar una nota. 
notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "!Archivo eliminado con exito¡"); //mensajes que todo esta ok
  res.redirect("/notes");
};
//Esta funcion se en carga de la busqueda de una nota 
notesCtrl.searchNote = async (req, res) => {
  const { facultad, carrera, area, subArea, tipoDocumento, subTipoDocumento, periodo, pdfArchivo, asunto, observaciones } = req.body;
  const errors = [];

  // Validaciones de campos seleccionables
  if (!facultad) {
    errors.push({ text: "Escoja una opción A." });
  }
  if (!carrera) {
    errors.push({ text: "Escoja una opción B." });
  }
  if (!area) {
    errors.push({ text: "Escoja una opción C." });
  }
  if (!subArea) {
    errors.push({ text: "Escoja una opción D." });
  }
  if (!tipoDocumento) {
    errors.push({ text: "Escoja una opción E." });
  }
  if (!subTipoDocumento) {
    errors.push({ text: "Escoja una opción F." });
  }
  if (!periodo) {
    errors.push({ text: "Escoja una opción F." });
  }
  if (!pdfArchivo) {
    errors.push({ text: "Escoja una opción F." });
  }
  if (!asunto) {
    errors.push({ text: "Escoja una opción F." });
  }
  if (!observaciones) {
    errors.push({ text: "Escoja una opción F." });
  }

  if (errors.length > 0) {
    return res.render("notes/all-notes", {
      errors,
      facultad, 
      carrera, 
      area, 
      subArea, 
      tipoDocumento, 
      subTipoDocumento, 
      periodo, 
      pdfArchivo, 
      asunto, 
      observaciones
    });
  }

  try {
    // Consulta todas las notas en la base de datos que coinciden con los filtros
    const notes = await Note.find({
      user: req.user.id,
      facultad, 
      carrera, 
      area, 
      subArea, 
      tipoDocumento, 
      subTipoDocumento, 
      periodo, 
      pdfArchivo, 
      asunto, 
      observaciones
    }).lean();

    res.render("notes/all-notes", { notes });
  } catch (error) {
    req.flash("error_msg", "Error al buscar archivos");
    res.redirect("/notes");
  }
};

module.exports = notesCtrl;

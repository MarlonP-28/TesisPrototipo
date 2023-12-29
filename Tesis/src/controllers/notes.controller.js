const notesCtrl = {};
const Note = require("../models/Note");

notesCtrl.renderNoteFrom = (req, res) => {
  res.render("notes/new-notes");
};
//Esta función se encarga de crear una nueva nota en la base de datos.
notesCtrl.createNewNotes = async (req, res) => {

  const { facultad, carrera, area, subArea, tipoDocumento, subTipoDocumento, periodo, asunto, observaciones } = req.body;
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
    errors.push({ text: "Escoja una opción E." });
  }
  if (!carrera) {
    errors.push({ text: "Escoja una opción F." });
  }
  if (errors.length > 0)
    return res.render("notes/new-notes", {
      errors,
      area,
      cargo,
      departamento,
      subdepartamento,
      periodo,
      carrera

    });
  const newNote = new Note({ area, cargo, departamento, subdepartamento, periodo, carrera  });
  newNote.user = req.user.id;


  //Guardar en la base de datos
  await newNote.save();
  req.flash("success_msg", "!Archivo creado con exito¡");
  res.redirect("/notes"); //direcciona a notas automaticamente
};
//Esta función consulta todas las notas en la base de datos que pertenecen al usuario actual 
notesCtrl.renderNotes = async (req, res) => {
  const notes = await Note.find({ area: req.user.rol })//Se filtran las notas por rol
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
//Esta funcio se en carga de la busqueda de una nota 
notesCtrl.searchArchive = async (req, res) => {
  const { searchTerm } = req.query;

  try {
    let notes;
    if (searchTerm) {
      notes = await Note.find({
        user: req.user.id,
        $or: [
          { area: { $regex: new RegExp(searchTerm, 'Decanato') } },
          { cargo: { $regex: new RegExp(searchTerm, 'i') } },
          { departamento: { $regex: new RegExp(searchTerm, 'i') } },
          { subdepartamento: { $regex: new RegExp(searchTerm, 'i') } },
          { periodo: { $regex: new RegExp(searchTerm, 'i') } },
          { carrera: { $regex: new RegExp(searchTerm, 'i') } },
        ],
      }).lean();
    } else {
      notes = await Note.find({ user: req.user.id }).lean();
    }

    res.render("notes/all-notes", { notes, searchTerm });
  } catch (error) {
    console.error('Error en la búsqueda de archivos:', error);
    req.flash("error_msg", "Error en la búsqueda de archivos");
    res.redirect("/notes");
  }
};

module.exports = notesCtrl;
const notesCtrl = {};
const Note = require("../models/Note");
const fs = require('fs');
const path = require('path');
const notesDir = './src/uploads/';

notesCtrl.renderNoteFrom = (req, res) => {
  res.render("notes/new-notes");
};

//funcion para renderizar la vista de busqueda
notesCtrl.renderFindForm = (req, res) => {
  res.render("notes/find-notes");
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
    errors.push({ text: "Escoja un periodo." });
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
      asunto,
      observaciones
    });

  const archivo = req.files.pdfArchivo;
  const pdfArchivo = archivo.name;
  const newNote = new Note({ facultad, carrera, area, subArea, tipoDocumento, subTipoDocumento, periodo, pdfArchivo, asunto, observaciones });


  archivo.mv('src/uploads/' + pdfArchivo, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
  });
  newNote.user = req.user.id;


  //Guardar en la base de datos
  await newNote.save();
  req.flash("success_msg", "!Archivo creado con exito¡");
  res.redirect("/notes"); //direcciona a notas automaticamente
};
//Esta función consulta todas las notas en la base de datos en base al rol y facultad
notesCtrl.renderNotes = async (req, res) => {
  if (req.user.rol === "Admin") {
    const notes = await Note.find()//Se filtran las notas por facultad
      //.sort({ createdAt: "desc" })
      .lean();
    return res.render("notes/all-notes", { notes });
  } else {
    const notes = await Note.find({ area: req.user.rol })//Se filtran las notas por rol
      //.sort({ createdAt: "desc" })
      .lean();
    res.render("notes/all-notes", { notes });
  }

};
//Esta función se encarga de mostrar un formulario para editar una nota específica
notesCtrl.renderEditFrom = async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
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

//Esta función se encarga de buscar una nota en la base de datos
notesCtrl.findNote = async (req, res) => {
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
    errors.push({ text: "Escoja un periodo." });
  }
  if (errors.length > 0)
    return res.render("notes/find-notes", {
      errors,
      facultad,
      carrera,
      area,
      subArea,
      tipoDocumento,
      subTipoDocumento,
      periodo
    });

  const notes = await Note.find({ facultad, carrera, area, subArea, tipoDocumento, subTipoDocumento, periodo }).lean();
  res.render("notes/all-notes", { notes });
}

//funcion para visualizar el contenido del archivo pdf en una nueva ventana
notesCtrl.viewNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    console.log(note.pdfArchivo);
    if (!note || !note.pdfArchivo) {
      return res.status(404).send('El nombre del archivo no está disponible en la base de datos');
    }

    const pdfPath = path.join(notesDir, note.pdfArchivo);

    fs.readFile(pdfPath, (err, data) => {
      if (err) {
        console.error('Error al leer el archivo:', err);
        return res.status(500).send('Error al leer el archivo');
      }

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `inline; filename=${note.pdfArchivo}`);
      res.send(data);
    });
  } catch (err) {
    console.error('Error al buscar la nota:', err);
    res.status(500).send('Error al buscar la nota');
  }
}


module.exports = notesCtrl;
const notesCtrl = {};
const Note = require("../models/Note");
const fs = require('fs');
const path = require('path');
const notesDir = './src/uploads/';

//Esta funcion se encarga de renderizar un archivo
notesCtrl.renderNoteFrom = (req, res) => {
  res.render("notes/new-notes");
};
//Esta función se encarga de crear una nuevo archivo en la base de datos.
notesCtrl.createNewNotes = async (req, res) => {

  const {carrera, subArea, tipoDocumento, subTipoDocumento, periodo, asunto, observaciones } = req.body;
  const errors = [];
  if (!carrera) {
    errors.push({ text: "Escoja una carrera." });
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
      carrera,
      subArea,
      tipoDocumento,
      subTipoDocumento,
      periodo,
      asunto,
      observaciones
    });


  const archivo = req.files.pdfArchivo;
  const pdfArchivo = archivo.name;

  archivo.mv('src/uploads/' + pdfArchivo, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
  });
  
  //se obtiene parametros de usuarios
  const user = req.user.id;
  const facultad = req.user.facultad;
  const area = req.user.rol;

  const newNote = new Note({ facultad, carrera, area, subArea, tipoDocumento, subTipoDocumento, periodo, pdfArchivo, asunto, observaciones, user });
  //Guardar en la base de datos
  await newNote.save();
  req.flash("success_msg", "!Archivo creado con exito¡");
  res.redirect("/notes"); //direcciona a notas automaticamente
};
//Esta función consulta todos los archivos en la base de datos en base al rol y facultad
notesCtrl.renderNotes = async (req, res) => {
  const user = req.user;
  
  if (user.rol === "Admin") {
    const notes = await Note.find()//Se filtran los archivos por facultad
      //.sort({ createdAt: "desc" })
      .lean();
    return res.render("notes/all-notes", { notes});
  } else {
    const notes = await Note.find({ area: user.rol })//Se filtran los archivos por rol
      //.sort({ createdAt: "desc" })
      .lean();
    res.render("notes/all-notes", { notes});
  }

};
//Esta función se encarga de mostrar un formulario para editar una nota específica
notesCtrl.renderEditFrom = async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  res.render("notes/edit-notes", { note });
};
//Esta función se utiliza para actualizar los archivos existente en la base de datos
notesCtrl.updateNote = async (req, res) => {
  const { facultad, carrera, area, subArea, tipoDocumento, subTipoDocumento, periodo, pdfArchivo, asunto, observaciones } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { facultad, carrera, area, subArea, tipoDocumento, subTipoDocumento, periodo, pdfArchivo, asunto, observaciones });
  req.flash("success_msg", "!Archivo actualizado con exito¡");
  res.redirect("/notes");
};
//Esta función se encarga de eliminar los archivos. 
notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "!Archivo eliminado con exito¡"); //mensajes que todo esta ok
  res.redirect("/notes");
};

//Esta funcion para visualizar el contenido del archivo pdf en una nueva ventana
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
const notesCtrl = {};
const Note = require("../models/Note");
const User = require("../models/User");
const fs = require('fs');
const path = require('path');
const notesDir = './src/uploads/';

//Esta funcion se encarga de renderizar un archivo
notesCtrl.renderNoteFrom = (req, res) => {
  //obtener los datos del usuario que esta logueado
  const user = req.user;
  res.render("notes/new-notes", { user });
};
//Esta función se encarga de crear una nuevo archivo en la base de datos.
notesCtrl.createNewNotes = async (req, res) => {
  //se obtiene parametros de usuarios
  const user = req.user.id;
  const facultad = req.user.facultad;
  const area = req.user.rol;

  var { carrera, subArea, tipoDocumento, subTipoDocumento, periodo, codigoCodificacion, numPaginas, asunto, observaciones } = req.body;

  //lista las notas que tienen la misma facultad, area y periodo
  const notes = await Note.find({ facultad: facultad, area: area, periodo: periodo }).lean();
  //cuenta la cantidad de notas que tienen la misma facultad, area y periodo
  const cantidadNotas = notes.length;
  console.log(cantidadNotas);
  //al codigo de codificacion se le agrega la cantidad de notas que tienen la misma facultad, area y periodo
  codigoCodificacion = codigoCodificacion + "-" + (cantidadNotas + 1);
  const archivo = req.files.pdfArchivo;
  const pdfArchivo = archivo.name;

  archivo.mv('src/uploads/' + codigoCodificacion+".pdf", (err) => {
    if (err) {
      return res.status(500).send(err);
    }
  });

  
  

  const newNote = new Note({ facultad, carrera, area, subArea, tipoDocumento, subTipoDocumento, periodo, codigoCodificacion, pdfArchivo, numPaginas, asunto, observaciones, user });
  //Guardar en la base de datos
  await newNote.save();
  req.flash("success_msg", "!Archivo creado con exito¡");
  res.redirect("/notes"); //direcciona a notas automaticamente
};
//Esta función consulta todos los archivos en la base de datos en base al rol y facultad
notesCtrl.renderNotes = async (req, res) => {
  const user = req.user;
  console.log(user);
  if (user.rol === "Admin") {
    //const notes = await Note.find()//Se filtran los archivos por facultad
      //.sort({ createdAt: "desc" })
    //  .lean();
    //return res.render("notes/all-notes", { notes });
    res.redirect("/administration")
  } else {
    const notes = await Note.find({ area: user.rol })//Se filtran los archivos por rol
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
    console.log(note.codigoCodificacion);
    if (!note || !note.codigoCodificacion) {
      return res.status(404).send('El nombre del archivo no está disponible en la base de datos');
    }

    const pdfPath = path.join(notesDir, note.codigoCodificacion)+".pdf";

    fs.readFile(pdfPath, (err, data) => {
      if (err) {
        console.error('Error al leer el archivo:', err);
        return res.status(500).send('Error al leer el archivo');
      }

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `inline; filename=${note.codigoCodificacion}`);
      res.send(data);
    });
  } catch (err) {
    console.error('Error al buscar la nota:', err);
    res.status(500).send('Error al buscar la nota');
  }
}

module.exports = notesCtrl;
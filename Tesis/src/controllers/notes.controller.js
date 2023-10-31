const notesCtrl = {};
const Note = require("../models/Note");

notesCtrl.renderNoteFrom = (req, res) => {
  res.render("notes/new-notes");
};
//Esta función se encarga de crear una nueva nota en la base de datos.
notesCtrl.createNewNotes = async (req, res) => {
  const { title, description } = req.body;
  const errors = [];
  if (!title) {
    errors.push({ text: "Please Write a Title." });
  }
  if (!description) {
    errors.push({ text: "Please Write a Description" });
  }
  if (errors.length > 0)
    return res.render("notes/new-notes", {
      errors,
      title,
      description,
    });
  const newNote = new Note({ title, description });
  newNote.user = req.user.id;
  await newNote.save();
  req.flash("success_msg", "Note Added Successfuly");
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
    req.flash("error_msg", "Not Authorized");
    return res.redirect("/notes");
  }
  res.render("notes/edit-notes", { note });
};
//Esta función se utiliza para actualizar una nota existente en la base de datos
notesCtrl.updateNote = async (req, res) => {
  const { title, description } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, description });
  req.flash("success_msg", "Note Updated Successfuly");
  res.redirect("/notes");
};
//Esta función se encarga de eliminar una nota. 
notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Note Deleted Successfuly"); //mensajes que todo esta ok
  res.redirect("/notes");
};

module.exports = notesCtrl;

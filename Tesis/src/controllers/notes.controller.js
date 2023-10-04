const notesCtrl = {};

const Note = require("../models/Note");

notesCtrl.renderNoteFrom = (req, res) => {
  res.render("notes/new-notes");
};

notesCtrl.createNewNotes = async (req, res) => {
  const { title, description } = req.body;
  const newNote = new Note({ title, description });
  await newNote.save();
  req.flash("success_msg", "Note Added Successfuly");
  res.redirect("/notes"); //direcciona a notas automaticamente
};
//Consulta hacia la base de datos
notesCtrl.renderNotes = async (req, res) => {
  const notes = await Note.find().lean();
  res.render("notes/all-notes", { notes });
};

notesCtrl.renderEditFrom = async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  res.render("notes/edit-notes", { note });
};

notesCtrl.updateNote = async (req, res) => {
  const { title, description } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, description });
  req.flash("success_msg", "Note Updated Successfuly");
  res.redirect("/notes");
};

notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Note Deleted Successfuly"); //mensajes que todo esta ok
  res.redirect("/notes");
};

module.exports = notesCtrl;

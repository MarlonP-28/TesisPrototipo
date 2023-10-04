const { Router } = require("express");
const router = Router();

const {
  renderNoteFrom,
  createNewNotes,
  renderNotes,
  renderEditFrom,
  updateNote,
  deleteNote,
} = require("../controllers/notes.controller");

const { isAuthenticated } = require("../helpers/auth");

//New note
router.get("/notes/add", isAuthenticated, renderNoteFrom);

router.post("/notes/new-notes", isAuthenticated, createNewNotes);

//Get all notes
router.get("/notes", isAuthenticated, renderNotes);

//Edit notes
router.get("/notes/edit/:id", isAuthenticated, renderEditFrom);

router.put("/notes/edit-notes/:id", isAuthenticated, updateNote); //actualiza los datos

//Delete notes

router.delete("/notes/delete/:id", isAuthenticated, deleteNote);

module.exports = router;

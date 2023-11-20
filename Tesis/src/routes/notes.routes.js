const { Router } = require("express");
const router = Router();

const {
  renderNoteFrom,
  createNewNotes,
  renderNotes,
  renderEditFrom,
  updateNote,
  deleteNote,
  searchArchive,
} = require("../controllers/notes.controller");

const { isAuthenticated } = require("../helpers/auth");


router.get("/notes/add", isAuthenticated, renderNoteFrom);
router.post("/notes/new-notes", isAuthenticated, createNewNotes);
router.get("/notes", isAuthenticated, renderNotes);
router.get("/notes/edit/:id", isAuthenticated, renderEditFrom);
router.put("/notes/edit-notes/:id", isAuthenticated,   updateNote);
router.delete("/notes/delete/:id", isAuthenticated, deleteNote);
router.get("/search-archive", isAuthenticated, searchArchive);

module.exports = router;

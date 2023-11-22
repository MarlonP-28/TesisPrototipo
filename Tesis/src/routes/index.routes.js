const { Router } = require("express");
const router = Router();

const { renderSignin, searchArchive, renderNotes } = require("../controllers/index.controller");

router.get("/", renderSignin);

router.get("/search", searchArchive)

router.get("/all-notes", renderNotes)

module.exports = router;

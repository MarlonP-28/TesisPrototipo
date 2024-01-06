const { Router } = require("express");
const router = Router();

const { renderSignin, renderNotes } = require("../controllers/index.controller");

router.get("/", renderSignin);

router.get("/all-notes", renderNotes);

module.exports = router;

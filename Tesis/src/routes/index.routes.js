const { Router } = require("express");
const router = Router();

const { renderIndex, renderAbout, renderDeveloper } = require("../controllers/index.controller");

router.get("/", renderIndex);

router.get("/about", renderAbout);

router.get("/developer", renderDeveloper);

module.exports = router;

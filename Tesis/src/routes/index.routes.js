const { Router } = require("express");
const router = Router();

const { renderSignin, searchArchive } = require("../controllers/index.controller");

router.get("/", renderSignin);

router.get("/search", searchArchive);

module.exports = router;

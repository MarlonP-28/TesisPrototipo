const { Router } = require("express");
const router = Router();

const {
  renderSignUpForm,
  signUp,
  renderSignInForm,
  signIn,
  logOut,
  enlistUsers,
  addUser,
  deletUser,
  updateView,
  updateUser,

} = require("../controllers/users.controller");

const { isAuthenticated, isAdmin } = require("../helpers/auth");

router.get("/users/signup",isAuthenticated, renderSignUpForm);
router.post("/users/signup",isAuthenticated, signUp);
router.get("/users/signin",  renderSignInForm);
router.post("/users/signin", signIn);
router.get("/users/logout", logOut);

/*********************/
router.get("/administration", enlistUsers);
router.post("/administration/add", addUser);
router.delete("/administration/delete/:id", deletUser);
router.get("/administration/update/:id", updateView);
router.post("/administration/update", updateUser);
module.exports = router;

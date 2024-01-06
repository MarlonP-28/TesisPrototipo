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
  redirect,
  addView,

} = require("../controllers/users.controller");

const { isAuthenticated, isAdmin } = require("../helpers/auth");

router.get("/users/signin",  renderSignInForm);
router.post("/users/signin", signIn);
router.get("/users/logout", logOut);

/*********************/
router.get("/administration", isAuthenticated, enlistUsers);
router.get("/redirect", redirect);
router.post("/administration/add",isAuthenticated, addUser);
router.get("/administration/add",isAuthenticated, addView);
router.delete("/administration/delete/:id",isAuthenticated, deletUser);
router.get("/administration/update/:id",isAuthenticated, updateView);
router.put("/administration/update/:id",isAuthenticated, updateUser);
module.exports = router;

const { Router } = require("express");
const router = Router();

const {
  renderSignUpForm,
  signUp,
  renderSignInForm,
  signIn,
  logOut,

} = require("../controllers/users.controller");

const { isAuthenticated, isAdmin } = require("../helpers/auth");

router.get("/users/signup", isAuthenticated, renderSignUpForm);
router.post("/users/signup", isAuthenticated, signUp);
router.get("/users/signin", renderSignInForm);
router.post("/users/signin", signIn);
router.get("/users/logout", logOut);


module.exports = router;

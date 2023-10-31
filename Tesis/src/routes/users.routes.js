const { Router } = require("express");
const router = Router();

const {
  renderSignUpForm,
  signUp,
  renderSignInForm,
  signIn,
  logOut,
  renderForgotPasswordForm, // Nueva función para renderizar el formulario de recuperación de contraseña
  forgotPassword, // Nueva función para manejar la solicitud de recuperación de contraseña

} = require("../controllers/users.controller");

router.get("/users/signup", renderSignUpForm);
router.post("/users/signup", signUp);
router.get("/users/signin", renderSignInForm);
router.post("/users/signin", signIn);
router.get("/users/logout", logOut);
router.get("/users/forgot-password", renderForgotPasswordForm);
router.post("/users/forgot-password", forgotPassword);

module.exports = router;

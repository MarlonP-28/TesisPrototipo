const usersCtrl = {};
const User = require("../models/User");
const passport = require("passport");

//Renderiza el formulario de registro
usersCtrl.renderSignUpForm = (req, res) => {
  res.render("users/signup");
};
//valida los datos
usersCtrl.signUp = async (req, res) => {
  const errors = [];
  const { name, email, password, confirm_password } = req.body;
  if (password != confirm_password) {
    errors.push({ text: "Password do not match." });
  }
  if (password.length < 4) {
    errors.push({ text: "Password must be at least 4 characters." });
  }
  if (errors.length > 0) {
    res.render("users/signup", {
      //Me devuelve los errores establecidos
      errors,
      name,
      email,
      password,
      confirm_password,
    });
  } else {
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      req.flash("error_msg", "The email is already in use.");
      res.redirect("/users/signup");
    } else {
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash("success_msg", "You are registered");
      res.redirect("/users/signin");
    }
  }
};
//Renderiza el formulario de registro
usersCtrl.renderSignInForm = (req, res) => {
  res.render("users/signin");
};
//valida los datos
usersCtrl.signIn = passport.authenticate("local", {
  //VALIDANDO CON PASSPORT Y CONFIG/PASSPORT.JS
  failureRedirect: "/users/signin",
  successRedirect: "/notes",
  failureFlash: true,
});

//Cerrar sesión
usersCtrl.logOut = (req, res) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success_msg", "You are logged out now.");
    res.redirect("/users/signin");
  });
};

usersCtrl.renderForgotPasswordForm = (req, res) => {
  res.render("users/forgot-password");
};

usersCtrl.forgotPassword = async (req, res) => {
  const { email } = req.body;
  
  try {
    const user = await User.findOne({ email });
    
    if (!user) {
      req.flash("error_msg", "No user found with that email address.");
      return res.redirect("/users/forgot-password");
    }
    
    // Genera un token único para la recuperación de contraseña y almacénalo en la base de datos
    user.resetPasswordToken = // Genera un token único aquí
    user.resetPasswordExpires = Date.now() + 3600000; // Expira en 1 hora
    
    await user.save();
    
    // Envía un correo electrónico al usuario con un enlace para restablecer la contraseña (usando nodemailer o una librería similar)
    
    req.flash("success_msg", "An email with instructions to reset your password has been sent.");
    res.redirect("/users/signin");
  } catch (err) {
    console.error(err);
    req.flash("error_msg", "An error occurred. Please try again.");
    res.redirect("/users/forgot-password");
  }
};

module.exports = usersCtrl;

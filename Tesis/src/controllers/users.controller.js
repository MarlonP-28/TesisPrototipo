const usersCtrl = {};
const User = require("../models/User");
const passport = require("passport");

//Renderiza el formulario de registro
usersCtrl.renderSignUpForm = (req, res) => {
  res.render("users/signup");
};
//valida los datos
usersCtrl.signUp = async (req, res) => {
  console.log(req.body)
  const errors = [];
  const { name, email, rol, password, confirm_password } = req.body;
  console.log(req.body)
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
      rol,
      password,
      confirm_password,
    });
  } else {
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      req.flash("error_msg", "The email is already in use.");
      res.redirect("/users/signup");
    } else {
      const newUser = new User({ name, email, rol, password });
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

module.exports = usersCtrl;

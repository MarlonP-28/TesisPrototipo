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
      req.flash("success_msg", "User registered");
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
    req.flash("success_msg", "Session closed successfully.");
    res.redirect("/users/signin");
  });
};

module.exports = usersCtrl;

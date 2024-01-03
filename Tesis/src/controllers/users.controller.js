const usersCtrl = {};
const User = require("../models/User");
const passport = require("passport");
const auth = require("../helpers/auth");
//Renderiza el formulario de registro
usersCtrl.renderSignUpForm = (req, res) => {
  res.render("users/signup");
};

//valida los datos
usersCtrl.signUp = async (req, res) => {
  console.log(req.body)
  const errors = [];
  const { name, facultad, email, rol, password, confirm_password } = req.body;
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
      facultad,
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
      const newUser = new User({ name, facultad, email, rol, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash("success_msg", "You are registered");
      res.redirect("/users/signin");
    }
  }
};

//Renderiza el formulario de registro
usersCtrl.renderSignInForm = (req, res) => {
  if(auth.isAuthenticated(req,res)){
    if(auth.isAdmin(req)){
      res.redirect("/administration")
    }else{
      res.redirect("/notes")
    }
  }else{    
    res.render("users/signin");
  }
};

//valida los datos
usersCtrl.signIn = passport.authenticate("local", {
  //VALIDANDO CON PASSPORT Y CONFIG/PASSPORT.JS
  failureRedirect: "/users/signin",
  successRedirect: "/redirect",
  failureFlash: true,
});




usersCtrl.enlistUsers = async(req, res) => {
  if(auth.isAdmin(req.user.rol)){
    const users = await User.find().lean();
  console.log(users)
  for (var clave in users) {
    console.log(clave)
    users[clave].password=users[clave].password.dec
  }
  res.render("users/userlist",{ users });
  }else{
    res.redirect("/notes")

  }
  
}

usersCtrl.deletUser= async(req, res) => {

  if(auth.isAdmin(req.user.rol)){
    await User.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "!Usuario eliminado con exito¡"); //mensajes que todo esta ok
  res.redirect("/administration");
  }
  else{
    res.redirect("/notes")
  }


  await User.findByIdAndDelete(req.params.id);


  if(auth.isAdmin(req.user.rol)){
    await User.findByIdAndDelete(req.params.id);
    req.flash("success_msg", "!Usuario eliminado con exito¡"); //mensajes que todo esta ok
    res.redirect("/administration");
  }
  else{
    res.redirect("/notes")
  }


  
}
/*usersCtrl.signIn =  async(req, res) => {
      const newUser = new User({ name:"jefatura", email:"jefatura@epn.edu.ec", rol:"jefatura-fis", password:"JefaturaF1$2023" });
      newUser.password = await newUser.encryptPassword("@dminF1$2023");
      await newUser.save();
      req.flash("success_msg", "You are registered");
      console.log("sfvsdfvgbdrbdtbsrtvs")
      res.redirect("/users/signin");
}*/

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

usersCtrl.updateView = async(req, res) => {

  if(auth.isAdmin(req.user.rol)){
    const user =  await User.findById(req.params.id).lean();
    console.log(user)
   res.render("users/editusers",{user})
  }
  else{
    res.redirect("/notes")
  }


   
};

usersCtrl.updateUser = async (req, res) => {


  if(auth.isAdmin(req.user.rol)){
    
  console.log(req.body)
  const errors = [];
  
  const { name, email, rol, password, confirm_password, _id } = req.body;
  console.log(req.body)
  if (password != confirm_password) {
    errors.push({ text: "Las contraseñas no coinciden" });
  }
  if (password.length < 4) {
    errors.push({ text: "La contraseña debe tener al menos 8 caracteres" });
  }
  if (errors.length > 0) {
    res.render("users/editusers", {
      //Me devuelve los errores establecidos
      errors,
      name,
      email,
      rol,
      password,
      confirm_password,
      _id
    });
  } else {
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      req.flash("error_msg", "El email ya esta en uso");
      res.redirect("/administration/update/:"+_id);
    } else {
      const newUser = new User({ name, email, rol, password });
      const passwordenc = await newUser.encryptPassword(password);
      console.log(passwordenc)
      await User.findByIdAndUpdate(_id,{name, email, rol, passwordenc})
      
      await newUser.save();
      req.flash("success_msg", "Datos actualizados correctamente");
      res.redirect("/administration");
    }
  }
  }
  else{
    res.redirect("/notes")
  }


};

usersCtrl.addUser = async (req, res) => {


  if(auth.isAdmin(req.user.rol)){
    console.log(req.body)
  const errors = [];
  const { name, email, rol, password, confirm_password } = req.body;
  console.log(req.body)
  if (password != confirm_password) {
    errors.push({ text: "Las contraseñas no coinciden" });
  }
  if (password.length < 8) {
    errors.push({ text: "La contraseña debe contener al menos 8 caracteres" });
  }
  if (errors.length > 0) {
    res.render("users/userlist", {
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
      req.flash("error_msg", "El correo ingresado ya esta en uso");
      res.redirect("/administration");
    } else {
      const newUser = new User({ name, email, rol, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash("success_msg", "Usuario creado exitosamente");
      res.redirect("/administration");
    }
  }
  }
  else{
    res.redirect("/notes")
  }



  
};

module.exports = usersCtrl;
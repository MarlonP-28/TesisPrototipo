const usersCtrl = {};
const User = require("../models/User");
const passport = require("passport");
const auth = require("../helpers/auth");

//Renderiza el formulario de registro
usersCtrl.renderSignInForm = (req, res) => {
  res.render("users/signin");
};


usersCtrl.signIn = passport.authenticate("local", {
  //VALIDANDO CON PASSPORT Y CONFIG/PASSPORT.JS
  failureRedirect: "/users/signin",
  successRedirect: "/redirect",
  failureFlash: true,
});


usersCtrl.redirect = (req,res)=>{
  console.log(" redirect isAdmin: ", auth.isAdmin(req.user.rol))
  if(auth.isAdmin(req.user.rol)){
    res.redirect("/administration")
  } else {
    res.redirect("/notes")

  }
}


usersCtrl.enlistUsers = async(req, res) => {
  console.log(" enlistUsers isAdmin: ", auth.isAdmin(req.user.rol))
  if(auth.isAdmin(req.user.rol)){
    const users = await User.find().lean();
    res.render("users/userlist",{ users });
  } else {
    res.redirect("/notes")
  }
}


usersCtrl.deletUser= async(req, res) => {
  console.log(" deletUser isAdmin: ", auth.isAdmin(req.user.rol))
  if(auth.isAdmin(req.user.rol)){
    await User.findByIdAndDelete(req.params.id);
    req.flash("success_msg", "!Usuario eliminado con exito¡"); //mensajes que todo esta ok
    res.redirect("/administration");
  } else {
    res.redirect("/notes")
  }
  await User.findByIdAndDelete(req.params.id);
  if(auth.isAdmin(req.user.rol)){
    await User.findByIdAndDelete(req.params.id);
    req.flash("success_msg", "!Usuario eliminado con exito¡"); //mensajes que todo esta ok
    res.redirect("/administration");
  } else {
    res.redirect("/notes")
  }
  
}


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
  console.log(" updateView isAdmin: ", auth.isAdmin(req.user.rol))
  if(auth.isAdmin(req.user.rol)){
    const user =  await User.findById(req.params.id).lean();
    res.render("users/editusers",{user})
  } else {
    res.redirect("/notes")
  }  
};


usersCtrl.addView = async(req, res) => {
  console.log(" addView isAdmin: ", auth.isAdmin(req.user.rol))
  if(auth.isAdmin(req.user.rol)){
    res.render("users/createusers")
  } else {
    res.redirect("/notes")
  }  
};


usersCtrl.updateUser = async (req, res) => {
  console.log(" updateUser isAdmin: ", auth.isAdmin(req.user.rol))
  if(auth.isAdmin(req.user.rol)){
    const errors = [];
    var { name, facultad, email, rol, password, confirm_password,tipo, estado} = req.body;
    if (tipo==undefined){
      tipo=[]
    }
    if (password != confirm_password) {
      errors.push({ text: "Las contraseñas no coinciden" });
    }

    if (password.length < 4) {
      errors.push({ text: "La contraseña debe tener al menos 8 caracteres" });
    }

    if (errors.length > 0) {
      res.render("users/editusers", {
        //Devuelve los errores establecidos
        errors,
        name,
        faculdad,
        email,
        rol,
        password,
        confirm_password,
        _id
      });
    } else {
      const emailUser = await User.findOne({ email: email });

      if (emailUser && emailUser.id!=req.params.id) {
        req.flash("error_msg", "El email ya esta en uso");
        res.redirect("/administration/update/"+req.params.id);
      } else {
        const newUser = new User({  "name": name, 
                                    "facultad":facultad, 
                                    "email":email, 
                                    "rol":rol, 
                                    "password":password, 
                                    "state": estado, 
                                    "typeuser": tipo
                                  });
        const passwordenc = await newUser.encryptPassword(password);
        await User.findByIdAndUpdate(req.params.id,{  "name": name, 
                                                      "facultad":facultad, 
                                                      "email":email, 
                                                      "rol":rol, 
                                                      "password":passwordenc, 
                                                      "state": estado, 
                                                      "typeuser": tipo })
        req.flash("success_msg", "Datos actualizados correctamente");
        res.redirect("/administration");
      }  
    }
  } else {
    res.redirect("/notes")
  }
};


usersCtrl.addUser = async (req, res) => {
  console.log(" addUser isAdmin: ", auth.isAdmin(req.user.rol))
  if(auth.isAdmin(req.user.rol)){
    const errors = [];
    const { name, facultad, email, rol, password, confirm_password, tipo, estado } = req.body;
    
    if (password != confirm_password) {
      errors.push({ text: "Las contraseñas no coinciden" });
    }

    if (password.length < 8) {
      errors.push({ text: "La contraseña debe contener al menos 8 caracteres" });
    }

    if (errors.length > 0) {
      res.render("users/userlist", {
        //Devuelve los errores establecidos
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
        req.flash("error_msg", "El correo ingresado ya esta en uso");
        res.redirect("/administration");
      } else {
        const newUser = new User({  "name": name, 
                                    "facultad":facultad, 
                                    "email":email, 
                                    "rol":rol, 
                                    "password":password, 
                                    "state": estado, 
                                    "typeuser": tipo });
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash("success_msg", "Usuario creado exitosamente");
        res.redirect("/administration");
      }
    }
  }else{
    res.redirect("/notes")
  }  
};

module.exports = usersCtrl;
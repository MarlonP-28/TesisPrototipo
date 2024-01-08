const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

//MODELS USER
const User = require("../models/User");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },//Verifica si el usuario ingresado existe en la bd
    async (email, password, done) => {
      const user = await User.findOne({ email: email });
      if (!user) {
        return done(null, false, { message: "Not User Found" });
      }
      else if(user.state=="0"){
        return done(null, false, { message: "Inactive user" });
      }
      
      else {//verifica si la clave ingresada coincide con la bd
        const match = await user.matchPassword(password);
        if (match) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrec Password" });
        }
      }
    }
  )
);

//VERIFICANDO LA SESSION DEL USER
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

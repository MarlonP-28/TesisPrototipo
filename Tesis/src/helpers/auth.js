const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error_msg", "Not Authorized");
  res.redirect("/users/signin");
};

helpers.isAdmin = (rol) => {
  console.log("isAdmin: ", rol)
  return  rol === 'Admin';
};

module.exports = helpers;

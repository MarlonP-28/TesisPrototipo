const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error_msg", "Not Authorized");
  res.redirect("/users/signin");
};

helpers.isAdmin = (rol) => {
  return  rol === 'admin';
};
module.exports = helpers;

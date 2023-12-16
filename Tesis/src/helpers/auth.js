const helpers = {};

helpers.isAuthenticated = (req, res) => {
  return req.isAuthenticated()
};

helpers.isAdmin = (req) => {
  return  req.user.rol === 'admin';
};
module.exports = helpers;

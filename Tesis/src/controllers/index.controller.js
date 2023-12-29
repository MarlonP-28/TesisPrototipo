const indexCtrl = {};

indexCtrl.renderSignin = (req, res) => {
  res.render("users/signin");
};

indexCtrl.searchArchive = (req, res) => {
  res.render("notes/search");
};

indexCtrl.renderNotes = (req, res) => {
  res.render("notes/all-notes");
};

indexCtrl.renderNotes = (req, res) => {
  res.render("notes/all-notes");
};
//redirige a la pagina historial de archvios
indexCtrl.renderNotes = (req, res) => {
  res.render("notes/all-notes");
};
module.exports = indexCtrl;

const indexCtrl = {};

indexCtrl.renderSignin = (req, res) => {
  res.render("users/signin");
};

indexCtrl.renderNotes = (req, res) => {
  res.render("notes/all-notes");
};
module.exports = indexCtrl;

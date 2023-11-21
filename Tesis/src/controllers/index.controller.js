const indexCtrl = {};

indexCtrl.renderSignin = (req, res) => {
  res.render("users/signin");
};

indexCtrl.searchArchive = (req, res) => {
  res.render("notes/search");
};
module.exports = indexCtrl;

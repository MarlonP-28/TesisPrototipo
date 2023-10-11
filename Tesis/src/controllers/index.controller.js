const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
  res.render("index");
};

indexCtrl.renderAbout = (req, res) => {
  res.render("about");
};
indexCtrl.renderDeveloper = (req, res) => {
  res.render("developer");
};

module.exports = indexCtrl;

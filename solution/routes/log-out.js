const { removeSession } = require("../model/session.js");

// function post(req, res) {
//   const sid = req.signedCookies.sid;
//   removeSession(sid);
//   res.clearCookie("sid");
//   res.redirect("/");
// }

function post(req, res) {
  removeSession(req.session.id);
  res.clearCookie("sid");
  res.redirect("/");
}

module.exports = { post };

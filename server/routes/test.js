var expres = require("express");
var router = expres.Router();

module.exports = (param) => {

  router.use((req, res, next) => {
    req.port = param;
    next();
  });


  router.get("/", (req, res, next) => {
    res.send(`Serverul functioneaza pe portul ${req.port}`);
  });


  return router;
}

var PGlite = require("@electric-sql/pglite");

var Databaza = PGlite.PGlite;

var db = new Databaza("./databaza/base_db");

module.exports = db;

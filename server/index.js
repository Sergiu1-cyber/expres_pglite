const express = require("express");

const app = express();

const port = 3002;
app.use(express.json());
app.use(express.urlencoded({extended: false}));

var testRouter = require("./routes/test")
app.use("/test", testRouter(port));

var db = require("../databaza/index");


app.listen(port, () => {
  console.log(`server portul: ${port}`)
});

var express = require("express");
var app = express();
//app.express();
app.get("/", function(req, res){
res.send("<h1>Welcome</h1>" +
          "<h3>Name: Shweta Gawali</h3>"+
          "<h3>RollNO: 229213</h3>"+
          "<h3>PRN no: 220941220175</h3>"+
          "<h3>Course: PG-DAC</h3>"+
          "<h3>gmail: gawalishweta0@gmail.com</h3>"+
          "<h3>Address: Pune</h3>");
});
app.listen(9000);
console.log("Running at port 9000");
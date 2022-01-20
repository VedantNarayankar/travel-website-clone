const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/app", function (req, res) {
res.sendFile(__dirname+"/index.html") 
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port"+process.env.PORT);
});
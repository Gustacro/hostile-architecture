const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "app")));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/app/index.html"));
});
app.listen(8080, () => console.log("Listening on port 8080..."));
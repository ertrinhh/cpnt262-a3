const path = require("path");
const express = require("express");
const app = express();

app.use(express.static("./public"));

app.get("/", function (request, response) {
  // console.log(response);
  response.send("<h1>HOWWWWDY BRO</h1>");
});

app.use(function (request, response) {
  response.status(404);
  response.send("404: File IS LITERALLY NOT THERE OK");
});

const port = process.env.port || 3000;
app.listen(port, function () {
  console.log(`listening on port: ${port}`);
});

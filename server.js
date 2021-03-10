const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(function (request, response) {
  response.status(404);
  response.send("404: File IS LITERALLY NOT THERE OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`listening on port: ${PORT}`);
});

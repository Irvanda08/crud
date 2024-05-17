const express = require("express");
const bodyParser = require("body-parser");
const dataRoutes = require("./route/dataRoute.js");

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("", dataRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

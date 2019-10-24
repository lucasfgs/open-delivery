const express = require("express");
const app = express();

require("./database");

const routes = require("./routes");

app.use(express.json());
app.use(routes);

app.listen(5000);

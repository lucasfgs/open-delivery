const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const routes = require("./routes");

require("./database");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.SERVER_PORT);

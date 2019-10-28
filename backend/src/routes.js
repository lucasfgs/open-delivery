const express = require("express");

const CompanyController = require("./controllers/CompanyController");
const AddressController = require("./controllers/AddressController");

const routes = express.Router();

routes.get("/companies", CompanyController.index);
routes.post("/companies", CompanyController.store);

routes.get("/companies/:company_id/addresses", AddressController.index);
routes.post("/companies/:company_id/addresses", AddressController.store);

module.exports = routes;

const { Router } = require("express");

const CompanyController = require("./controllers/CompanyController");
const AddressController = require("./controllers/AddressController");

const routes = Router();

routes.get("/companies", CompanyController.index);
routes.post("/companies", CompanyController.store);

routes.post("/companies/:company_id/addresses", AddressController.store);

module.exports = routes;

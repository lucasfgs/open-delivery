const { Router } = require("express");

const CompanyController = require("./controllers/CompanyController");

const routes = Router();

routes.get("/companies", CompanyController.index);
routes.post("/companies", CompanyController.store);

module.exports = routes;

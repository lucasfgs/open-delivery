const express = require("express");

const CompanyController = require("./controllers/CompanyController");
const AddressController = require("./controllers/AddressController");
const ProductController = require("./controllers/ProductController");
const CustomerController = require("./controllers/CustomerController");
const CustomerOrderController = require("./controllers/CustomerOrderController");
const AuthCustomerController = require("./controllers/AuthCustomerController");

const routes = express.Router();

routes.get("/companies", CompanyController.index);
routes.post("/companies", CompanyController.store);

routes.get("/companies/:company_id/addresses", AddressController.index);
routes.post("/companies/:company_id/addresses", AddressController.store);

routes.get("/companies/:company_id/products", ProductController.index);
routes.post("/companies/:company_id/products", ProductController.store);

routes.get("/customers", CustomerController.index);
routes.post("/customers", CustomerController.store);

routes.post("/customers/:customer_id/products", CustomerOrderController.store);

routes.post("/auth/customers", AuthCustomerController.show);

module.exports = routes;

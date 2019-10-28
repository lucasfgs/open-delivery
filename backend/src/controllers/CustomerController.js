const Customer = require("../models/Customer");

module.exports = {
  async index(req, res) {
    const customers = await Customer.findAll();

    return res.json(customers);
  },

  async store(req, res) {
    const { name, email, password } = req.body;

    const customer = await Customer.create({
      name,
      email,
      password
    });

    return res.json(customer);
  }
};

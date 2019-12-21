const bcrypt = require("bcrypt");

const Customer = require("../models/Customer");

module.exports = {
  async index(req, res) {
    const customers = await Customer.findAll();

    return res.json(customers);
  },

  async store(req, res) {
    const { name, email, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    const customer = await Customer.create({
      name,
      email,
      password: passwordHash
    });

    return res.json(customer);
  }
};

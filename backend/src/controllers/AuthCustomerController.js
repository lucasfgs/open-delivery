const bcrypt = require("bcrypt");
const Customer = require("../models/Customer");

module.exports = {
  async show(req, res) {
    const { email, password } = req.body;
    const customer = await Customer.findOne({ where: { email } });

    if (!customer) res.json({ error: true, message: "User not found" });

    const validPassword = await bcrypt.compare(password, customer.password);

    validPassword
      ? res.json({ id: customer.id })
      : res.json({ error: true, message: "User not found" });
  }
};

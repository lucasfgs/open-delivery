const Customer = require("../models/Customer");

module.exports = {
  async show(req, res) {
    const { email, password } = req.body;
    const customer = await Customer.findOne({ where: { email } });

    if (!customer) res.json({ error: true, message: "User not found" });

    if (password === customer.password) {
      res.json({ id: customer.id });
    } else {
      res.json({ error: true, message: "User not found" });
    }
  }
};

const Customer = require("../models/Customer");

module.exports = {
  async show(req, res) {
    const { email } = req.body;
    const customer = await Customer.findOne({ where: { email } });

    customer
      ? res.json({ id: customer.id })
      : res.json({ error: true, message: "User not found" });
  }
};

const Product = require("../models/Product");
const Customer = require("../models/Customer");

module.exports = {
  async index(req, res) {},

  async store(req, res) {
    const { customer_id } = req.params;
    const { product_id } = req.body;

    const customer = await Customer.findByPk(customer_id);

    if (!customer) res.status(404).json({ error: "Customer not found!" });

    const product = await Product.findByPk(product_id);

    if (!product) res.status(404).json({ error: "Product not found" });

    await customer.addProduct(product);

    res.send(product);
  }
};

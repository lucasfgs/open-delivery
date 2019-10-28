const Product = require("../models/Product");
const Company = require("../models/Company");

module.exports = {
  async index(req, res) {
    const { company_id } = req.params;

    const company = await Company.findByPk(company_id, {
      include: { association: "products" }
    });

    return res.json(company);
  },

  async store(req, res) {
    const { company_id } = req.params;
    const { name, category, description, price } = req.body;

    const company = Company.findByPk(company_id);

    if (!company) return res.status(400).json({ error: "Company not found" });

    const product = await Product.create({
      name,
      category,
      description,
      price,
      company_id
    });

    return res.json(product);
  }
};

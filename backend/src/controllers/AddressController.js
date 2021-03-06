const Address = require("../models/Address");
const Company = require("../models/Company");

module.exports = {
  async index(req, res) {
    const { company_id } = req.params;

    const company = await Company.findByPk(company_id, {
      include: { association: "address" }
    });

    return res.json(company);
  },

  async store(req, res) {
    const { company_id } = req.params;
    const { street, number, district, zipcode } = req.body;

    const company = Company.findByPk(company_id);

    if (!company) return res.status(400).json({ error: "Company not found" });

    const address = await Address.create({
      street,
      number,
      district,
      zipcode,
      company_id
    });

    return res.json(address);
  }
};

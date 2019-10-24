const Company = require("../models/Company");

module.exports = {
  async index(req, res) {
    const companies = await Company.findAll();

    return res.json(companies);
  },

  async store(req, res) {
    const { name, email, password, telephone } = req.body;

    const company = await Company.create({ name, email, password, telephone });

    return res.json(company);
  }
};

const model = require("./model");

module.exports = {
  Clinics: async (req, res) => {
    const { cli } = req.body;
    if (cli) {
      try {
        const data = await model.exists(cli);
        res.status(200).send(data);
      } catch (e) {
        console.log(e.message);
      }
    }
  },
};

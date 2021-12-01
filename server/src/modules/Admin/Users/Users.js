const model = require("./model");

module.exports = {
  Clinics: async (_, res) => {
    try {
      const data = await model.clinics;
      res.status(200).send(data);
    } catch (e) {
      console.log(e.message);
    }
  },
};

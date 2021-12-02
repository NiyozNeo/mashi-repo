const model = require("./model");
module.exports = {
  post: async (req, res) => {
    const { token } = req.headers;
    if (token) {
      try {
        let data = await model.delet(token);
        res.status(200).send(data);
      } catch (e) {
        console.log(e.message);
      }
    }
  },
};

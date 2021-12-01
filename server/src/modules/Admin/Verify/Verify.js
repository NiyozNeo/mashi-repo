const model = require("./model");

module.exports = {
  post: async (req, res) => {
    const { token } = req.headers;
    if (token) {
      try {
        await model.f(token);
        res.status(200).json({ message: "ok" });
      } catch (e) {
        console.log(e.message);
      }
    }
  },
};

const model = require("./model");
const { verifyUser } = require("../../lib/jwt");

module.exports = {
  CHECK: async (req, res) => {
    try {
      const { token } = req.body;
      if (token) {
        let data = null;
        try {
          data = verifyUser(token);
        } catch (error) {
          res.status(404).send("not found ...");
          return;
        }
        let user = await model.exists(data.user_id);
        if (user.length == 1) {
          res.status(201).json({
            message: "oasdasd",
            token: data.is_admin,
          });
          return;
        } else {
          res.status(404).send("not found ...");
          return;
        }
      } else {
        res.status(404).end();
        return;
      }
    } catch (e) {
      console.log(e.message);
    }
  },
};

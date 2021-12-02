const model = require("./model");
const { verifyUser } = require("../../lib/jwt");
const pg = require("../../lib/postgres");
module.exports = {
  post: async (req, res) => {
    const { clinic, category, token } = req.body;
    if ((clinic, category, token)) {
      try {
        let user = verifyUser(token);
        const data = await model.add(user.user_id, clinic, category);
        res.status(200).send(data);
      } catch (e) {
        console.log(e.message);
      }
    }
  },
  get: async (req, res) => {
    const { token } = req.headers;
    let user = null
    try {
      user = verifyUser(JSON.parse(token).token);
    } catch (error) {
      res.status(404)
      return
    }
    let data = await model.f(user.user_id);
    if (user.is_admin) {
      let userim = await pg(
        "select * from users where user_id = $1",
        user.user_id
      );
      let data = await model.all(userim[0].admin_clinic);
      let filtered = data.filter((el) => el.is_verified === false);
      res.status(200).json({ data, allData: filtered });
    } else if (user.user_id) {
      let allData = await model.all(user.admin_clinic);
      res.status(200).json({ data, allData });
    }
  },
};

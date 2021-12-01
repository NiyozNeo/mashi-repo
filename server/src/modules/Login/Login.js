const model = require("./model");
const bcrypt = require("bcrypt");
const { signUser } = require("../../lib/jwt");
module.exports = {
  Login: async (req, res) => {
    const { username, password } = req.body;
    if ((username, password)) {
      try {
        const data = await model.exists(username);
        if (data.length >= 1) {
          Number(password);
          const match = await bcrypt.compare(password, data[0].user_password);
          if (match) {
            if (data[0].is_admin) {
              res.status(201).json({
                message: "User found",
                token: signUser({
                  user_id: data[0].user_id,
                  is_admin: data[0].is_admin,
                }),
                admin: signUser({
                  user_id: data[0].user_id,
                  is_admin: data[0].is_admin,
                }),
              });
            } else {
              res.status(201).json({
                message: "User found",
                token: signUser({
                  user_id: data[0].user_id,
                  is_admin: data[0].is_admin,
                }),
              });
            }
          } else {
            res.status(404).json({
              message: "password not correct",
            });
          }
        } else {
          res.status(404).json({
            message: "user not found",
          });
        }
      } catch (e) {
        console.log(e.message);
      }
    } else {
      res.status(404).json({
        message: "input is not correct",
      });
    }
  },
};

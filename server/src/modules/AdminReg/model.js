const pg = require("../../lib/postgres");

const REGISTER = `
    INSERT INTO
        users(
        user_name, 
        user_password,
        user_phone,
        is_admin,
        admin_clinic
    )
    VALUES ($1, $2, $3 , 'true' , $4)
    RETURNING
            *
`;

const EXISTING_USER = `
    SELECT * FROM users WHERE user_name = $1
`;

const exists = (username) => pg(EXISTING_USER, username);
const register = (username, password, phone, select) =>
  pg(REGISTER, username, password, phone, select);

module.exports = {
  register,
  exists,
};

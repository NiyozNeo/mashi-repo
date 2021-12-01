const pg = require("../../lib/postgres");

const EXISTING_USER = `
    SELECT * FROM users WHERE user_id = $1
`;

const exists = (username) => pg(EXISTING_USER, username);

module.exports = {
  exists,
};

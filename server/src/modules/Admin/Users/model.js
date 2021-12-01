const pg = require("../../../lib/postgres");

const all_clinics = `
    SELECT * FROM users
`;

const clinics = pg(all_clinics);

module.exports = {
  clinics,
};

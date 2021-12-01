const pg = require("../../lib/postgres");

const all_clinics = `
    SELECT * FROM clinics
`;

const clinics = pg(all_clinics);

module.exports = {
  clinics,
};

const pg = require("../../lib/postgres");

const clinics = `
    SELECT * FROM categories where category_clinic = $1
`;

const exists = (clicnic) => pg(clinics, clicnic);

module.exports = {
  exists,
};

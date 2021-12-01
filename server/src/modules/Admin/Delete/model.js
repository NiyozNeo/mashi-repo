const pg = require("../../../lib/postgres");

const queues = `
   delete from queues where queue_id = $1 RETURNING *
`;

const delet = (id) => pg(queues, id);

module.exports = {
  delet,
};

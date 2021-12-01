const pg = require("../../../lib/postgres");

const queues = `
    update queues set is_verified = true where queue_id = $1
`;

const f = (user) => pg(queues, user);

module.exports = {
  f,
};

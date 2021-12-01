const pg = require("../../lib/postgres");

const queues = `
    insert into queues(queue_user , queue_clinic , queue_category) values ($1 , $2 ,$3) RETURNING
    *
`;

const find = `
    select * from queues where queue_user = $1
`;

const f = (user) => pg(find, user);
const add = (user, clinic, category) => pg(queues, user, clinic, category);
const all = (clinic) =>
  pg("select * from queues where queue_clinic = $1", clinic);

module.exports = {
  add,
  f,
  all,
};

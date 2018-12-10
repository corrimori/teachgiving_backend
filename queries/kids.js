const knex = require('./db');

getAllKids = () => {
  return knex('kids').orderBy('name', 'ASC');
};

getKidById = id => {
  return knex('kids').where('id', id);
};

createKid = body => {
  return knex('kids')
    .insert(body)
    .returning('*')
    .catch(err => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
};

updateKid = (id, body) => {
  return (
    knex('kids')
      .where('id', id)
      // .update(body)
      .update({
        name: body.name,
        user_id: body.user_id,
        avatar_id: body.avatar_id,
        runningTotal: body.runningTotal,
      })
      .returning('*')
      .catch(err => {
        console.error(err);
        knex.destroy();
        process.exit(1);
      })
  );
};

deleteKidById = id => {
  return knex('kids')
    .where('id', id)
    .del()
    .returning('*')
    .catch(err => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
};

module.exports = {
  getAllKids,
  getKidById,
  createKid,
  updateKid,
  deleteKidById,
};

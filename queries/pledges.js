const knex = require('./db');

getPledges = () => {
  return knex('pledges');
};

createPledge = body => {
  return knex('pledges')
    .insert(body)
    .returning('*')
    .catch(err => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
};

updatePledge = (id, body) => {
  return (
    knex('pledges')
      .where('id', id)
      // kids_id = kids.id
      .update({
        kid_id: body.kid_id,
        charity_id: body.charity_id,
        pledgeAmount: body.pledgeAmount,
        numOfWeeks: body.numOfWeeks,
      })
      .returning('*')
      .catch(err => {
        console.error(err);
        knex.destroy();
        process.exit(1);
      })
  );
};

deletePledge = id => {
  return knex('pledges')
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
  getPledges,
  createPledge,
  updatePledge,
  deletePledge,
};

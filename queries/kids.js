const knex = require('./db');

getAllKids = () => {
  return knex('kids').orderBy('name', 'ASC');
};

getKidById = id => {
  return knex('kids').where('id', id);
};

//====================================================
//gets all pledges for kid      /pledges/:kid_id????
//====================================================
getPledgesForKid = (id, body) => {
  console.log('pledges for kids ====== queries>>>>>');
  return knex('pledges')
    .join('kids', 'kids.id', '=', 'pledges.kid_id')
    .join('charities', 'charities.id', '=', 'pledges.charity_id')
    .select(
      // 'pledges.id as id',
      'pledges.kid_id',
      'kids.name as kidName',
      'pledges.charity_id',
      'charities.name',
      'pledges.pledgeAmount',
      'pledges.numOfWeeks'
    )
    .where('pledges.kid_id', id)
    .distinct();
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
  getPledgesForKid,
  createKid,
  updateKid,
  deleteKidById,
};

const knex = require('./db');

getPledges = () => {
  return knex('pledges');
};

//====================================================
//gets all pledges for kid      /pledges/:kid_id
//====================================================
getPledgesForKid = (kid_id, body) => {
  console.log('in getPledges for kid ...  kid_id>>>>>>>', kid_id);
  return knex('pledges')
    .join('kids', 'kids.id', '=', 'pledges.kid_id')
    .join('charities', 'charities.id', '=', 'pledges.charity_id')
    .select(
      'pledges.id as id',
      'kids.id as kidId',
      'charity.id as charityId',
      'pledges.pledgeAmt',
      'pledges.numOfWeeks'
    )
    .where('pledges.kid_id', kidId)
    .distinct();
};

module.exports = {
  getPledges,
  getPledgesForKid,
};

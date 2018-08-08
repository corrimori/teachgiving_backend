
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pledges').del()
    .then(function () {
      return knex('pledges').insert([
        {id: 1, kids_id: 2, charities_id: 3, pledgeAmount: 0.25, numOfWeeks: 2},
        {id: 2, kids_id: 1, charities_id: 4, pledgeAmount: 0.50, numOfWeeks: 4},
        {id: 3, kids_id: 3, charities_id: 2, pledgeAmount: 1.00, numOfWeeks: 4},
        {id: 4, kids_id: 1, charities_id: 4, pledgeAmount: 0.25, numOfWeeks: 2},
        {id: 5, kids_id: 4, charities_id: 1, pledgeAmount: 0.50, numOfWeeks: 6}
      ]);
    });
};

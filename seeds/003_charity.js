
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('charity').del()
    .then(function () {
      return knex('charity').insert([
        {id: 1, name: 'Golden Gate National Parks Conservancy', url: 'http://www.parksconservancy.org/'},
        {id: 2, name: 'San Francisco SPCA', url: 'https://www.sfspca.org/'},
        {id: 3, name: 'San Francisco - Marin Food Bank', url: 'https://www.sfmfoodbank.org/'},
        {id: 4, name: 'Hamilton Families', url: 'https://hamiltonfamilies.org/'},
      ]);
    });
};

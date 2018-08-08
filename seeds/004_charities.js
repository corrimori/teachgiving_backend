
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('charities').del()
    .then(function () {
      return knex('charities').insert([
        {id: 1, name: 'Golden Gate National Parks Conservancy', description: 'The San Francisco SPCA is dedicated to saving, protecting, caring, and advocating for animals.', url: 'http://www.parksconservancy.org/'},
        {id: 2, name: 'San Francisco SPCA', description: 'SF Food Bank mission is to end hunger, envisioning a community where everyone is able to obtain enough nutritious food to support the health and well-being of themselves and their families.', url: 'https://www.sfspca.org/'},
        {id: 3, name: 'San Francisco - Marin Food Bank', description: 'A nonprofit organization created to preserve the Golden Gate National Parks, enhance the experiences of visitors, and build a community dedicated to conserving the parks for the future.', url: 'https://www.sfmfoodbank.org/'},
        {id: 4, name: 'Hamilton Families', description: 'The mission is to end family homelessness in the San Francisco Bay Area.', url: 'https://hamiltonfamilies.org/'},
      ]);
    });
};

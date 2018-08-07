
exports.up = function(knex, Promise) {
  return knex.schema.createTable('avatar', (table) => {
    table.increments()
    table.string('avatarImage')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('avatar')
};

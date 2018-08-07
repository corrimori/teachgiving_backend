
exports.up = function(knex, Promise) {
  return knex.schema.createTable('charity', (table) => {
    table.increments()
    table.string('name').notNullable()
    table.string('description').notNullable()
    table.string('url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('charity')
};

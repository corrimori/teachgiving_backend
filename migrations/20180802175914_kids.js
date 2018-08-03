
exports.up = function(knex, Promise) {
  return knex.schema.createTable('kids', (table) => {
    table.increments()
    table.string('name').notNullable()
    table.integer('user_id').notNullable().references('users.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('kids')
};

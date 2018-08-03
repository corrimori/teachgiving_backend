
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pledges', (table) => {
    table.increments()
    table.integer('kid_id').notNullable().references('kid.id')
    table.integer('user_id').notNullable().references('users.id')
    table.integer('pledgeAmount').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pledges')
};

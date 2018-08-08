
exports.up = function(knex, Promise) {
  return knex.schema.createTable('kids', (table) => {
    table.increments()
    table.string('name').notNullable()
    table.integer('users_id').notNullable().references('users.id')
    table.integer('avatars_id').notNullable().references('avatars.id')
    table.float('runningTotal')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('kids')
};

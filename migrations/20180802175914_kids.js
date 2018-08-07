
exports.up = function(knex, Promise) {
  return knex.schema.createTable('kids', (table) => {
    table.increments()
    table.string('name').notNullable()
    table.integer('user_id').notNullable().references('users.id')
    table.string('avatar_id').notNullable().references('avatar.id')
    table.integer('runningTotal')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('kids')
};

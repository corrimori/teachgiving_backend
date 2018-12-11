exports.up = function(knex, Promise) {
  return knex.schema.createTable('kids', table => {
    table.increments();
    table.string('name').notNullable();
    table.integer('user_id');
    table
      .foreign('user_id')
      .references('id')
      .inTable('users');
    table.integer('avatar_id');
    table
      .foreign('avatar_id')
      .references('id')
      .inTable('avatars');
    table.float('runningTotal');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('kids');
};

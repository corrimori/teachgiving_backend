exports.up = function(knex, Promise) {
  return knex.schema.createTable('charities', (table) => {
    table.increments()
    table.string('name').notNullable()
    table.string('description').notNullable()
    table.string('url')
    table.string('image_path')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('charities')
};

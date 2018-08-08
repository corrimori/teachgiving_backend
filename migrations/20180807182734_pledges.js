exports.up = function(knex, Promise) {
  return knex.schema.createTable('pledges', (table) => {
    table.increments()
    table.integer('kids_id').notNullable().references('kids.id')
    table.integer('charities_id').notNullable().references('charities.id')
    table.float('pledgeAmount')
    table.integer('numOfWeeks')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pledges')
};

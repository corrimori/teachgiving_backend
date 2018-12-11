exports.up = function(knex, Promise) {
  return knex.schema.createTable('pledges', table => {
    table.increments();
    table.integer('kid_id');
    table
      .foreign('kid_id')
      .references('id')
      .inTable('kids');
    table.integer('charity_id');
    table
      .foreign('charity_id')
      .references('id')
      .inTable('charities');
    table.float('pledgeAmount');
    table.integer('numOfWeeks');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pledges');
};

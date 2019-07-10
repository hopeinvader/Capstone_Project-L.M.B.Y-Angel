
exports.up = function(knex, Promise) {
  return knex.schema.createTable('category', (table)=> {
      table.increments();
      table.string('type').unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('category');
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('title_entrepneurs', (table) => {
      table.increments();
      table.string('body');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('title_entrepneurs')
};

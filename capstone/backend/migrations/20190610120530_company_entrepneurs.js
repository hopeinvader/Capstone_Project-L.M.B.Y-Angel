
exports.up = function(knex, Promise) {
  return knex.schema.createTable('company_entrepneurs', (table) => {
      table.increments();
      table.string('name');
      table.string('info');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('company-entrepneurs');
};

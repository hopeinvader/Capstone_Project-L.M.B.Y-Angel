
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
      table.increments();
      table.string('email').unique().notNullable();
      table.string('username').unique().notNullable();
      table.string('password');
      table.boolean('entrepneurs_investors')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

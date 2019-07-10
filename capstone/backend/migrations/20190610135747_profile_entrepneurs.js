exports.up = function(knex, Promise) {
    return knex.schema.createTable('profile_entrepneurs', (table) => {
      table.increments();
      table.string('name');
      table.string('photo');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('profile_entrepneurs');
  };
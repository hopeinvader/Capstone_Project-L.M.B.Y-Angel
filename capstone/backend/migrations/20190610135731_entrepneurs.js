exports.up = function(knex, Promise) {
    return knex.schema.createTable('entrepneurs', (table) => {
        table.increments();
        table.string('background_photo');
        table.string('logo');
        table.integer('minimum_amount');
        table.integer('current_amount');
        table.integer('achieve_amount');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('entrepneurs');
  };
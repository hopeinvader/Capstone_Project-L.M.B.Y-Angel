exports.up = function(knex, Promise) {
    return knex.schema.createTable('investors', (table) => {
        table.increments();
        table.string('background_photo');
        table.string('logo');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('investors');
  };
  
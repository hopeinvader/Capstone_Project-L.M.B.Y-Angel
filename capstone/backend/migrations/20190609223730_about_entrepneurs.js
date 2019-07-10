
exports.up = function(knex, Promise) {
    return knex.schema.createTable('about_entrepneurs', (table)=>{
        table.increments();
        table.string('header');
        table.string('highlights');
        table.string('body');
        table.string('photo')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('about_entrepneurs');
  };
  

exports.up = function(knex, Promise) {
    return knex.schema.createTable('expertise', (table)=>{
        table.increments();
        table.string('header');
        table.string('highlights');
        table.specificType('stringarray', 'text ARRAY');
        table.string('photo')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('about_investors');
  };
  
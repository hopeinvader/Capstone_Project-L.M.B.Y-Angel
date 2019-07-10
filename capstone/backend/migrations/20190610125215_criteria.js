
exports.up = function(knex, Promise) {
    return knex.schema.createTable('criteria', (table)=>{
        table.increments();
        table.string('header');
        table.string('Investment Range');
        table.specificType('stringarray', 'text ARRAY');
        table.string('photo')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('about_investors');
  };
  
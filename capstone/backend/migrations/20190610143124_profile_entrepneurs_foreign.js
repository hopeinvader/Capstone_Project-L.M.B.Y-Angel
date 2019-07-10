
exports.up = function(knex, Promise) {
    return knex.schema.table('profile_entrepneurs', (table)=>{
        table.integer('company_id').unsigned();
        table.foreign('company_id').references('company_entrepneurs.id');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('profile_entrepneurs', (table)=>{
        table.dropForeign('company_id');
        table.dropColumn('company_id');
    })
  };
  
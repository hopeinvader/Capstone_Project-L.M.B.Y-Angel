
exports.up = function(knex, Promise) {
    return knex.schema.table('investors', (table)=>{
        table.integer('investors_id').unsigned();
        table.foreign('investors_id').references('users.id');
        table.integer('category').unsigned();
        table.foreign('category').references('category.id');
        table.integer('about').unsigned();
        table.foreign('about').references('about_investors.id');
        table.integer('expertise').unsigned();
        table.foreign('expertise').references('expertise.id');
        table.integer('criteria').unsigned();
        table.foreign('criteria').references('criteria.id');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('investors', (table)=>{
        table.dropForeign('investors_id');
        table.dropColumn('investors_id');
        table.dropForeign('category');
        table.dropColumn('category');
        table.dropForeign('about');
        table.dropColumn('about');
        table.dropForeign('expertise');
        table.dropColumn('expertise');
        table.dropForeign('criteria');
        table.dropColumn('criteria');
    })
  };
  
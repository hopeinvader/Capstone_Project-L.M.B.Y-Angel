
exports.up = function(knex, Promise) {
  return knex.schema.table('entrepneurs', (table)=>{
    table.integer('entrepneurs_id').unsigned();
    table.foreign('entrepneurs_id').references('users.id');
    table.integer('category').unsigned();
    table.foreign('category').references('category.id');
    table.integer('title').unsigned();
    table.foreign('title').references('title_entrepneurs.id');
    table.integer('company').unsigned();
    table.foreign('company').references('company_entrepneurs.id');
    table.integer('profile').unsigned();
    table.foreign('profile').references('profile_entrepneurs.id');
    table.integer('summury').unsigned();
    table.foreign('summury').references('summury.id');
    table.integer('product').unsigned();
    table.foreign('product').references('product.id');
    table.integer('advantage').unsigned();
    table.foreign('advantage').references('advantage.id');
    table.integer('motivation').unsigned();
    table.foreign('motivation').references('motivation.id');
    table.integer('toInvestors').unsigned();
    table.foreign('toInvestors').references('toInvestors.id');
    table.integer('about').unsigned();
    table.foreign('about').references('about_entrepneurs.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('entrepneurs', (table)=>{
      table.dropForeign('entrepneurs_id');
      table.dropColumn('entrepneurs_id');
      table.dropForeign('category');
      table.dropColumn('category');
      table.dropForeign('title');
      table.dropColumn('title');
      table.dropForeign('company');
      table.dropColumn('company');
      table.dropForeign('profile');
      table.dropColumn('profile');
      table.dropForeign('summury');
      table.dropColumn('summury');
      table.dropForeign('product');
      table.dropColumn('product');
      table.dropForeign('advantage');
      table.dropColumn('advantage');
      table.dropForeign('motivation');
      table.dropColumn('motivation');
      table.dropForeign('toInvestors');
      table.dropColumn('toInvestors');
      table.dropForeign('about');
      table.dropColumn('about');
  })
};

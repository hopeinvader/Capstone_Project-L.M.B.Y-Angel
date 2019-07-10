
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {id: 1, type: 'FinTech'},
        {id: 2, type: 'Food & Beverage'},
        {id: 3, type: 'Technology'},
        {id: 4, type: 'Others'}
      ]);
    });
};

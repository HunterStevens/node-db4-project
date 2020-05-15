exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('recipes_ingredients').del()
      .then(function () {
        // Inserts seed entries
        return knex('recipes_ingredients').insert([
          {recipe_id:3, ingredient_id:2, quantity:'3tbs.'},
          {recipe_id:1, ingredient_id:2, quantity:'2cups'},
          {recipe_id:3, ingredient_id:1, quantity:'8oz.'}
        ]);
      });
  };
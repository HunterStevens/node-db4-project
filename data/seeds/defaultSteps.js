exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('steps_recipes').del()
      .then(function () {
        // Inserts seed entries
        return knex('steps_recipes').insert([
          {recipe_id:1, step_number:1, instructions:'The first step'},
          {recipe_id:1, step_number:2, instructions:'The second step'},
          {recipe_id:2, step_number:1, instructions:'the first step for the other recipe'}
        ]);
      });
  };
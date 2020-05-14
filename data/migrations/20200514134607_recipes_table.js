
exports.up = function(knex) {
    return knex.schema.createTable('recipes', rec =>{
        rec.increments();
        rec.string('name', 255).notNullable().unique();
    })
    .createTable('ingredients', ing=>{
        ing.increments();
        ing.string('name', 255).notNullable().unique();
    })
    .createTable('steps_recipes', steps=>{
        steps.increments();
        steps.integer('step_number').notNullable();
        steps.string('instructions').notNullable().unique();
        steps.integer('recipe_id').notNullable()
        .references('recipes.id');
    })
    .createTable('recipes_ingredients', reIN=>{
        reIN.increments();
        reIN.integer('recipe_id').notNullable()
        .references('recipes.id')
        reIN.integer('ingredient_id').notNullable()
        .references('ingredients.id')
        reIN.string('quantity').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes_ingredients')
  .dropTableIfExists('steps_recipes')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes');
};

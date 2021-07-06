const express = require('express');
const Recipes = require('./recipe-router');
const router = express.Router();
const db = require('../dbConfig');

module.exports ={
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipes');
}

function getShoppingList(id){
    return db.select('ingredients.name', 'recipes_ingredients.quantity').from('recipes_ingredients')
    .join('ingredients', 'recipes_ingredients.ingredient_id', '=', 'ingredients.id')
    .join('recipes','recipes_ingredients.recipe_id','=','recipes.id')
    .where({recipe_id:id});
}

function getInstructions(id){
    return db.select('steps_recipes.step_number','steps_recipes.instructions').from('steps_recipes')
    .join('recipes','steps_recipes.recipe_id','=','recipes.id')
    .where({recipe_id:id});
}
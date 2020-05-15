const db = require("../data/db-config");

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db("recipes")
}

function getShoppingList(recipe_id) {
    /*
    SELECT i.ingredients, ri.quantity
    FROM ingredients as i
    JOIN recipe_ingredients as ri ON ri.ingredient_id = i.id
    JOIN recipes as r ON r.id = ri.recipe_id <- THIS CAUSE ERRORS! (was ingredients_id)
    */
    return db("ingredients as i")
        .select("i.ingredients", "ri.quantity")
        .where({ recipe_id })
        .join("recipe_ingredients as ri", "ri.ingredient_id", "i.id")
        .join("recipes as r", "r.id", "ri.recipe_id")
    }

function getInstructions(recipe_id) {
    /*
    SELECT instructions FROM instructions as i
    */
    return db("instructions as i")
        .select("i.instructions")
        .where({ recipe_id })
}
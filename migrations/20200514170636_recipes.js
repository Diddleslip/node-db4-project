
exports.up = function(knex) {
  return knex.schema
  .createTable("recipes", recipes => {
    recipes.increments();

    recipes.string("recipe").notNullable();
  })
  .createTable("ingredients", ingredients => {
    ingredients.increments();

    ingredients.string("ingredients").notNullable();
  })
  .createTable("instructions", instructions => {
    instructions.increments();

    instructions.string("instructions").notNullable();
    instructions.integer("recipe_id").notNullable();
  })
  .createTable("recipe_ingredients", recipe_ingredients => {
    recipe_ingredients.increments();

    recipe_ingredients.string("quantity").notNullable();
    recipe_ingredients
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE") // RESTRICT, DO NOTHING, SET NULL, CASCADE
        .onDelete("RESTRICT")

    recipe_ingredients
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT")
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("recipe_ingredients")
  .dropTableIfExists("instructions")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("recipes")

};

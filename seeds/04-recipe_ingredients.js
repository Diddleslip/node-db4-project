
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        { quantity: "2 cups of Cookie Crisp", ingredient_id: 1, recipe_id: 1  },
        { quantity: "2 1/2 cups of Milk", ingredient_id: 5, recipe_id: 1  },
        { quantity: "10 grams of Pepperoni", ingredient_id: 2, recipe_id: 2 },
        { quantity: "15 grams of Cheese", ingredient_id: 3, recipe_id: 2 },
        { quantity: "1 cup of Dough", ingredient_id: 4, recipe_id: 2 },
        { quantity: "1 cup of Red sauce", ingredient_id: 6, recipe_id: 2 },
      ]);
    });
};

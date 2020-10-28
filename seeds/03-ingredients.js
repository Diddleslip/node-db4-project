
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredients: "Dough" },
        { ingredients: "Cookie Crisp" },
        { ingredients: "Pepperoni" },
        { ingredients: "Cheese" },
        { ingredients: "Milk" },
        { ingredients: "Red sauce" },
        { ingredients: "TES TWO" },
      ]);
    });
};

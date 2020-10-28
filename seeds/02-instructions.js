
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { instructions: "Pour cereal into bowl, add milk to a bowl 2/3 full.", recipe_id: "1"},
        { instructions: "Toss dough around for 30 mins, lay it out in a circular motion, add a cup of Red sauce and spread evenly, add Cheese and Pepperoni to your liking across the whole Red sauce. Bake in oven for 45 mins at 450 degrees F.", recipe_id: "2"},
      ]);
    });
};

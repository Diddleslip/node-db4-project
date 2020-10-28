const express = require("express");
const db = require("./recipe-model");

const router = express.Router();

router.get("/", (req, res) => {
    db.getRecipes()
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

router.get("/:id/shoppingList", (req, res) => {
    const id = req.params.id;

    db.getShoppingList(id)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

router.get("/:id/instructions", (req, res) => {
    const id = req.params.id;

    db.getInstructions(id)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        res.status(500).json(error);
    })
})



module.exports = router;
// Import Express, router, and burger.js
const express = require("express")
const router = express.Router();
const burger = require("../models/burger.js")
// Create Router
router.get("/", function(req, res) {
    burger.all(function(results) {
        res.render("index", {burgers: results})
    })
})

router.post("/api/burgers", function(req, res) {
    burger.create([
        "burger_name", "devoured", "ingredients"
    ], [
        req.body.burger_name, req.body.devoured, req.body.ingredients
    ], function(data) {
        res.json({id: data.insertId})
    })
})

router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end()
        }else {
            res.status(200).end()
        }
    })
})

router.delete("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end()
        } else {
            res.status(200).end()
        }
    })
})
// Export Router

module.exports = router;
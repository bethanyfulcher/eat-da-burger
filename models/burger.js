// Import orm.js
const orm = require("../config/orm.js");
// Call the ORM functions using burger specific input for the ORM

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res)
        })
    },
    create: function(columns, values, cb) {
        orm.create("burgers", columns, values, function(res) {
            cb(res)
        })
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            cb(res);
        })
    }
}

// Export
module.exports = burger;
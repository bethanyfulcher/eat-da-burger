// Import (require) connection.js into orm.js
const connection = require("../config/connection.js")

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value)
        }
    }

    return arr.toString();
}

// Create methods:
const orm = {
    //  selectAll()
    all: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err
            cb(result)
        })
    },
    //  insertOne()
    create: function(table, columns, values, cb) {

        let queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += columns.toString();
        queryString += ") VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") "

        connection.query(queryString, values, function(err, result) {
            if (err) throw err
            cb(result)
        })
    },
    //  updateOne()
    update: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table
        
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) throw err;

            cb(result)
        })
    }

}
// Export the ORM object in module.exports
module.exports = orm;
const connection = require('./connection');

// methods for db storage/retrieval

// selectAll
// insertOne
// updateOne

var orm = {
    selectAll: function() {
        var query = "SELECT * FROM burgers";
        connection.query(query, function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    },

    insertOne: function() {
        var query = "INSERT INTO burgers (burger_name, devoured)
        VALUES (req.body.burger, "FALSE");

        connection.query(query, function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    },

    updateOne: function() {
        var query = `UPDATE burgers SET burger_name = ${req.body.burger} [WHERE id = ${req.body.id}]`

        connection.query(query, function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    }
};

module.exports = orm;
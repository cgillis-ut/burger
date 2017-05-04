// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
	selectAll: function(table, cb){
		var queryString = "SELECT * FROM ?? ;";
    connection.query(queryString, [table], function(err, data) {
      if (err) {
        throw err;
      }
      cb(data);
    });
	},
	insertOne: function(table, burgerChoice, cb){
		var queryString = "INSERT into ?? (burger_name) VALUES ?? ;"; 
		connection.query(queryString, [table, burgerChoice], function(err, data) {
      if (err) {
        throw err;
      }
      cb(data);
    });

	},
	updateOne: function(table, devoured, cb){
		UPDATE burgers SET devoured = true WHERE id = 3; 
		var queryString = "UPDATE " + table + " SET (devoured) = true WHERE id = ?" + 
	}
}


module.exports = orm;

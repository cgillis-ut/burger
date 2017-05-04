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
		var queryString = "INSERT into " + table + " (burger_name) VALUES ?? ;"; 
		connection.query(queryString, [burgerChoice], function(err, data) {
      if (err) {
        throw err;
      }
      cb(data);
    });

	},
	updateOne: function(table, whichBurger, cb){
		var queryString = "UPDATE " + table + " SET (devoured) = true WHERE id = ? ;";  
	}
};


module.exports = orm;

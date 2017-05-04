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
	insertOne: function(table, cb){
		//is this possible?
		var queryString = "INSERT into ?? (?? , ?? , ??) VALUES (?? ?? ??);"; 
		connection.query(queryString, [table,], function(err, data) {
      if (err) {
        throw err;
      }
      cb(data);
    });

	},
	updateOne: function(){}
}


module.exports = orm;

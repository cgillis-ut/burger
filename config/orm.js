// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
	selectAll: function(table, cb){
		var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, data) {
      if (err) {
        throw err;
      }
      cb(data);
    });
	},
	insertOne: function(table, ){
		var queryString = "INSERT into " + table +
		"(burger_name, devoured, date_) VALUES (?? ?? ??);"; 
		" "

	},
	updateOne: function(){}
}


module.exports = orm;

var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},

	insertOne: function(burgerChoice, cb){
		orm.insertOne("burgers", burgerChoice, function(){
			cb(res);
		});
	},
	updateOne: function(whichBurger, cb){
		orm.updateOne("burgers", whichBurger, function(){
			cb(res);
		});
	}
};

module.exports = burger;
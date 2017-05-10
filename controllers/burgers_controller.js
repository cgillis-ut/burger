var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    //dynamic data for handlebars
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  //column name/user input
	burger.insertOne(["burger_name"], [req.body.burger_name], function(){
	  res.redirect("/");
	});
});

router.put("/:id", function(req, res) {
  var condition = parseInt(req.params.id);
  //changes 'devoured' column from false to true when 'devour it' button is clicked
  burger.updateOne(["devoured"], condition, function() {
    res.redirect("/");
    console.log("updated");
  });
});




module.exports = router;

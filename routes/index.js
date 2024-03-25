var express = require('express');
var router = express.Router();

const userModel = require("./users")

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get("/create", async function(req,res){
//  let userdata = await userModel.create({
//   username: "Prakhar",
//   nickname: "Pns",
//   description: "Mern Stack developer",
//   categories: ['Js','Expressjs','UI/UX','Reactjs']
//  });
//  res.send(userdata)
});
router.get("/find", async function(req,res){
  //when you search by name in db
//  var regex =  new RegExp("Somya","i")
//   let user = await userModel.find({username: regex});
//When you have to find category in db.
// let user = await userModel.find({categories: {$all: 
//   ['Java']}});
//filter out things between dates
// var date1 = new Date('2024-03-24')
// var date2 = new Date('2024-03-25')
// let user = await userModel.find({datecreated: {$gte: date1,$lte:
// date2}});
let user = await userModel.find({nickname:{$exists: true}});
  res.send(user)
});

//using flash to check error on another route
// router.get('/check', function(req, res) {
//  console.log(req.flash("age"),req.flash("name"));
 
//  res.send("check on be terminal");
//  });
module.exports = router;

//ends at Backend - The EndGame (Part-2) | 1:02:08

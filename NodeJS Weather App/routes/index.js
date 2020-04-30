var express = require('express');
var router = express.Router();
//const bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',function(req,res,next){
  //res.render('index');
  console.log(req.body.city);
});
module.exports = router;

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Worona' });
});

router.get('/posts', function(req, res, next) {
  res.render('posts', { title: 'Llamada a posts' });
});

// Sum Endpoint: Returns sum of param A and B

router.get('/sum/:a/:b', function(req, res, next) {
  res.json(parseFloat(req.params.a) + parseFloat(req.params.b))
});

// Mul Endpoint: Returns multiplication of param A and B

router.get('/mul/:a/:b', function(req, res, next) {
  res.json(parseFloat(req.params.a) * parseFloat(req.params.b))
});

module.exports = router;

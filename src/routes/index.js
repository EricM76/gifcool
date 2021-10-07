var express = require('express');
var router = express.Router();

const {random, trending, search} = require('../controllers/gifsControllers')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/gifs/random',random)
router.get('/gifs/trending',trending)
router.get('/gifs/search',search)

module.exports = router;

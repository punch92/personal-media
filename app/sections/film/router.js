var express = require('express');
var Film = require('./models/Film');
var hbs = require('hbs');
var router = express.Router();

hbs.registerHelper('posterChooser', function(filmPoster) {
  if(filmPoster == 'N/A') return 'images/na.jpg';
  return filmPoster;
});


router.get('/', function(req, res, next) {
  Film.findAll().then(function(films){
    res.render('sections/film/film', {films: films});
  });
});



module.exports = router;

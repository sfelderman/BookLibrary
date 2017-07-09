var express = require('express');
var bookContr = require('./controllers/bookController.js');

var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	if (Object.keys(req.body).length > 0)
    	console.log('Body: ', req.body);
    if (Object.keys(req.query).length > 0)
    	console.log('Query: ', req.query);
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.route('/book').post(bookContr.postBook);
router.route('/books').post(bookContr.postBooks);
router.route('/book').get(bookContr.getBook);
router.route('/books').get(bookContr.getBooks);

module.exports = router;
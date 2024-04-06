var express = require('express');
const artist_controlers= require('../controllers/artist');
var router = express.Router();

/* GET detail artist page */
router.get('/detail', artist_controlers.artist_view_one_Page);

/* GET artists */
router.get('/', artist_controlers.artist_view_all_Page );

// GET request for one artist.
router.get('/artists/:id', artist_controlers.artist_detail);

module.exports = router;

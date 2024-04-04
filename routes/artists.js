var express = require('express');
const artist_controlers= require('../controllers/artist');
var router = express.Router();

/* GET artists */
router.get('/', artist_controlers.artist_view_all_Page );

// GET request for one costume.
router.get('/artists/:id', artist_controlers.costume_detail);

module.exports = router;

var express = require('express');
const artist_controlers = require('../controllers/artist');
var router = express.Router();

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}

/* GET detail artist page */
router.get('/detail', artist_controlers.artist_view_one_Page);

/* GET create artist page */
router.get('/create', secured, artist_controlers.artist_create_Page);

/* GET create update page */
router.get('/update', secured, artist_controlers.artist_update_Page);

/* GET delete artist page */
router.get('/delete', secured, artist_controlers.artist_delete_Page);

/* GET artists */
router.get('/', artist_controlers.artist_view_all_Page);

// GET request for one artist.
router.get('/artists/:id', artist_controlers.artist_detail);

module.exports = router;

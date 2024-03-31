var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var artist_controller = require('../controllers/artist');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// ARTIST ROUTES ///
// POST request for creating a artist.
router.post('/artists', artist_controller.artist_create_post);
// DELETE request to delete artist.
router.delete('/artists/:id', artist_controller.artist_delete);
// PUT request to update artist.
router.put('/artists/:id', artist_controller.artist_update_put);
// GET request for one artist.
router.get('/artists/:id', artist_controller.artist_detail);
// GET request for list of all artist items.
router.get('/artists', artist_controller.artist_list);
module.exports = router;
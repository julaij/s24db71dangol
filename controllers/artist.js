var Artist = require('../models/artist');
// List of all Artists
exports.artist_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Artist list');
};
// for a specific Artist.
exports.artist_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Artist detail: ' + req.params.id);
};
// Handle Artist create on POST.
exports.artist_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Artist create POST');
};
// Handle Artist delete from on DELETE.
exports.artist_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Artist delete DELETE ' + req.params.id);
};
// Handle Artist update form on PUT.
exports.artist_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Artist update PUT' + req.params.id);
};
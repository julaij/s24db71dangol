var Artist = require('../models/artist');
// List of all Artists
exports.artist_list = async function(req, res) {
    try {
        theArtists = await Artist.find();
        res.send(theArtists);
    }
    catch(error){
        res.status(500);
        res.send(`{"error":${error}}`);
    }
};

// VIEWS
// Handle a show all view
exports.artist_view_all_Page = async function(req, res) {
    try{
    theArtists = await Artist.find();
    res.render('artists', { title: 'Artist Search Results', results: theArtists });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// for a specific Artist.
exports.artist_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Artist detail: ' + req.params.id);
};
// Handle Artist create on POST.
exports.artist_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Artist();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.artist_name = req.body.artist_name;
    document.artist_masterpiece_cost = req.body.artist_masterpiece_cost;
    document.artist_masterpiece_name = req.body.artist_masterpiece_name;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle Artist delete from on DELETE.
exports.artist_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Artist delete DELETE ' + req.params.id);
};
// Handle Artist update form on PUT.
exports.artist_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Artist update PUT' + req.params.id);
};
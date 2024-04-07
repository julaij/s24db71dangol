var Artist = require('../models/artist');
// List of all Artists
exports.artist_list = async function (req, res) {
    try {
        theArtists = await Artist.find();
        res.send(theArtists);
    }
    catch (error) {
        res.status(500);
        res.send(`{"error":${error}}`);
    }
};

// VIEWS
// Handle a show all view
exports.artist_view_all_Page = async function (req, res) {
    try {
        theArtists = await Artist.find();
        res.render('artists', { title: 'Artist Search Results', results: theArtists });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.artist_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Artist.findById(req.query.id)
        res.render('artistdetail',
            { title: 'Artist Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.artist_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('artistcreate', { title: 'Artist Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.artist_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Artist.findById(req.query.id)
        res.render('artistupdate', { title: 'Artist Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// for a specific Artist.
exports.artist_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Artist.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Artist create on POST.
exports.artist_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Artist();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.artist_name = req.body.artist_name;
    document.artist_masterpiece_cost = req.body.artist_masterpiece_cost;
    document.artist_masterpiece_name = req.body.artist_masterpiece_name;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Artist delete from on DELETE.
exports.artist_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Artist.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle Artist update form on PUT.
exports.artist_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Artist.findById(req.params.id)
        // Do updates of properties
        if (req.body.artist_name)
            toUpdate.artist_name = req.body.artist_name;
        if (req.body.artist_masterpiece_cost) toUpdate.artist_masterpiece_cost = req.body.artist_masterpiece_cost;
        if (req.body.artist_masterpiece_name) toUpdate.artist_masterpiece_name = req.body.artist_masterpiece_name;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

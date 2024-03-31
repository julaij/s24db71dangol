const mongoose = require('mongoose');

const artistSchema = mongoose.Schema({
    artist_name : String, 
    artist_masterpiece_cost: Number,
    artist_masterpiece_name : String
})

module.exports = mongoose.model("Artist", artistSchema)
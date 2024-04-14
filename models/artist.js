const mongoose = require('mongoose');

const artistSchema = mongoose.Schema({
    artist_name : String, 
    artist_masterpiece_cost: {
        type: Number,
        required: true,
        min: [0],
        max: [10000000000]
    },    artist_masterpiece_name : String
})

module.exports = mongoose.model("Artist", artistSchema)
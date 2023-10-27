const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // other artist properties
});

const Artist = mongoose.model('artists', artistSchema);
module.exports = Artist;

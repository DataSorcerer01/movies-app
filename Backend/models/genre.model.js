const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // other genre properties
});

const Genre = mongoose.model('genres', genreSchema);
module.exports = Genre;

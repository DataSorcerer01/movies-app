const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    movieid: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    published: {
        type: Boolean,
        required: true
    },
    released: {
        type: Boolean,
        required: true
    },
    poster_url: {
        type: String,
        required: true
    },
    release_date: {
        type: String,
        required: true
    },
    publish_date: {
        type: String,
        required: true
    },
    artists: [{
        artistid: {
            type: Number,
            required: true
        },
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        wiki_url: {
            type: String,
            required: true
        },
        profile_url: {
            type: String,
            required: true
        },
        movies: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movie'
        }]
    }]
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;

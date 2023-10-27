const express = require('express');
const cors = require('cors');



const http = require('http');
const mongoose = require('mongoose');

// Import your Mongoose models
const Movie = require('./models/movie.model');
const Genre = require('./models/genre.model');
const Artist = require('./models/artist.model');

const app = express();
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/movies', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to the database!');
}).catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1);
});

// Define Mongoose models (Movie, Genre, Artist) here...

// Routes
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Upgrad Movie booking application development." });
});

app.get('/movie/:id', async (req, res) => {
    try {
        const movies = await Movie.find(); // Fetch movies from MongoDB
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/genres', async (req, res) => {
    try {
        const genres = await Genre.find(); // Fetch genres from MongoDB
        res.json(genres);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/artists', async (req, res) => {
    try {
        const artists = await Artist.find(); // Fetch artists from MongoDB
        res.json(artists);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = 8085;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const Movie = require('../models/movie.model');

exports.findAllMovies = async (req, res) => {
    try {
        const { status } = req.query;
        const query = status ? { status: status.toUpperCase() } : {};
        const movies = await Movie.find(query);
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.findOne = async (req, res) => {
    try {
        const { movieId } = req.params;
        const movie = await Movie.findById(movieId);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.findShows = async (req, res) => {
    try {
        const { movieId } = req.params;
        // Fetch and return shows data for the specified movieId
        // Implement logic to fetch shows data based on your data structure
        res.status(200).json({ message: `Shows data for movie ${movieId}` });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

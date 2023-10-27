const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/movies'; // Replace 'mydatabase' with your database name

const connectToDatabase = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to the database!');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
};

module.exports = {
    connectToDatabase
};

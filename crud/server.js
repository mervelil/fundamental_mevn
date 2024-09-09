var express = require('express');
var server = express();
var routes = require('../crud/routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/est',{ useNewUrlParser: true,
    useUnifiedTopology: true},function check(error) {
        if (error) {
            console.error('Error: Could not start the server.', error);
        } else {
            console.log('DB connection established');
        }
    });
   
    


async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/est', {
            useNewUrlParser:true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000 // Set timeout to 30 seconds
        });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            console.log('Connected to MongoDB');
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

server.use(express.json());
; // Apply CORS middleware before your routes
server.use(routes); // Make sure routes are applied after middleware
server.use(cors())
// Call the function to connect to the database
// connectToDatabase();

server.listen(8000, function check (error) {
    if (error) {
        console.error('Error: Could not start the server.', error);
    } else {
        console.log('Server started on port 8000');
    }
});

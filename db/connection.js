const mongoose = require('mongoose');
// Connect to the database
mongoose.connect('mongodb://localhost/your_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Handle connection events
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to the database');
});

// Export the connection
module.exports = db;
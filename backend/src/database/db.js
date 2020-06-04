const mongoose = require('mongoose');

const URI = 'mongodb+srv://charity_user:pruebasdb@charitydb-iangf.mongodb.net/<CharityDB>?retryWrites=true&w=majority'

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const connection_db = mongoose.connection;

connection_db.once('open', () => {
    console.log("MongoDB connection established successfully");
});


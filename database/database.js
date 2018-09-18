const mongoose = require('mongoose');

const mongoPath = process.env.MONGO_URL;

mongoose.connect(mongoPath, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', function() {
  console.log('Database Connected');
});
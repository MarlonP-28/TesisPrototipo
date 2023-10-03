/*const mongoose = require('mongoose')

const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));
*/

const mongoose = require('mongoose');
const mongodbHost = process.env.notes_app_mongodb_host || '127.0.0.1:27017'; // Provide a default value
const connectionString = `mongodb://${mongodbHost}/note-app`;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

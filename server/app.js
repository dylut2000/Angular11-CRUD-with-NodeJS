const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');


// init app
const app = express();
// db URL, ⚠️ use an environment variable for this
const DB_URL = 'mongodb://localhost:27017/books';
// get Port from .environment variable or use 5000
const PORT = process.env.PORT || 5000;


// use cross origine access
app.use(cors());


mongoose.Promise = global.Promise;
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
    .then(() => console.log('Database connected'),
    (error) => console.log('Database error: ' + error));




app.listen(PORT, () => console.log(`App listening on port:${PORT}`));
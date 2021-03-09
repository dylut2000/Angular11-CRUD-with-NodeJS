const mongoose = require('mongoose');

// Book model
const bookSchema = new mongoose.Schema({
    name: {
      type: String
    },
    price: {
      type: String
    },
    description: {
      type: String
    }
  }, {
    collection: 'books'
  });

module.exports = mongoose.model('Book', bookSchema);
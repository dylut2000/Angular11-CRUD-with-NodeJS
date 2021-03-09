const mongoose = require('mongoose');

// Book model
const bookSchema = new mongoose.Schema({
    name: {
      type: String
    },
    price: {
      type: Number
    },
    description: {
      type: String
    }
  }, {
    collection: 'books'
  });

module.exports = mongoose.model('Book', bookSchema);
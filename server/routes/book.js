const express = require('express');
const router = express.Router();

const {
  getBooks,
  addBook,
  editBook,
  deleteBook,
  getBookById,
} = require('../controllers/book');

// Get Book
router.get('/', getBooks);
// Add Book
router.post('/', addBook);
// Edit Book
router.put('/:id', editBook);
// Delete Book
router.delete('/:id', deleteBook);
// get Book by Id
router.get('/:id', getBookById);

module.exports = router;

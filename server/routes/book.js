const express = require('express');
const router = express.Router();

const {getBooks} = require('../controllers/post');


// Get Book
router.get('/', getBooks);


module.exports = router;
const express = require('express');
const router = express.Router();

// @route   GET api/omdb
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('OMDB route'));

module.exports = router;

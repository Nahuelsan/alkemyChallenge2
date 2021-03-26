const router = require('express').Router();

const post = require('./operation.js');

router.use('/post', post);

module.exports = router;
const router = require('express').Router();

const post = require('./post.js');

router.use('/post', post);


module.exports = router;
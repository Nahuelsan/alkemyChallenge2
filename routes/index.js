const router = require('express').Router();

const post = require('./operation.js');
app.get('/', (req, res) => res.status(200).send ({
    message: 'Example project did not give you access to the api web services',
}));
router.use('/post', post);

module.exports = router;
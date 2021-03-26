const server = require('express').Router();
const post = require('../controllers/post.js');

server.get('/', (req, res, next) =>{
    post.read()
    .then(r=> res.send(r))
    .catch(next);
})

server.post('/', (req, res,next)=>{
    const { title, content, img, category} = req.body
    console.log(req.body)
    if(!title || !content  || !img || !category){
        return res.status(400).send('Body must have a title, content and description')
    }
    post.create(req.body)
    .then(r => res.send(r))
    .catch(next);
})
server.patch('/:id', (req, res,next)=>{
    console.log(req.body)
    console.log(req.params)
    const { id } = req.params
    const { title, content, img} = req.body
    if(!title || !content  || !img ){
        return res.status(400).send('Body must have a title, content and description')
    }
    post.update(id, req.body)
    .then(r => res.send(r))
    .catch(next);
})

server.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    console.log(id)
    if (!id ) {
        return res.status(400).send('An id is needed to delete the product')
    }
    post.delete(id)
	.then(r => res.send(r))
	.catch(next);
});

module.exports = server;
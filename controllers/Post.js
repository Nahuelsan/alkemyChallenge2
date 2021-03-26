const sequelize     = require('sequelize');
const post       = require('../models/').post;

module.exports = {
    read: function(){
        return post
            .findAll({
                attributes: ['id', 'content', 'img', 'category', 'title'],
            })
    },

    create: function({content, img, category, title}, res){
        return post
        .create({
            title: title,
            content: content,
            img : img,
            category : category
        })
        .then(() => this.read())
        .catch(error => res.status(400).send(error))
    },
    update: function(id, {content, img, category, title}) {
        let atributesToUpdate= {};
        if (content) atributesToUpdate.content = content;
        if (img) atributesToUpdate.img = img;
        if (category) atributesToUpdate.category = category;
        atributesToUpdate.title = title;
        const postPromise = post.update(
            atributesToUpdate,
            { 
                where: { 
                    id
                }
            }
        )
        .then(() => post.findByPk(id))
        return postPromise
        .then(() => this.read())
    },

    delete: function(id) {
        return post.destroy({
            where: {
                id
            }
        })
        .then(() => this.read())
    },    
}
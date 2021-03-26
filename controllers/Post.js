const { Post } = require('../db.js');

module.exports = {
    read: function(){
        return Post.findAll({
            attributes: ['id', 'content', 'img', 'category', 'title'],
            order: ['category']
        })
    },

    create : function({content, img, category, title}){
        return Post.findOrCreate({
            where: {
                title: title,
                content: content,
                img : img,
                category : category.split('-').reverse().join('-')
            }
        })
        .then(() => this.read())
    },
    update: function(id, {content, img, category, title}) {
        let atributesToUpdate= {};
        if (content) atributesToUpdate.content = content;
        if (img) atributesToUpdate.img = img;
        if (category) atributesToUpdate.category = category;
        atributesToUpdate.title = title;
        const postPromise = Post.upcategory(
            atributesToUpdate,
            { 
                where: { 
                    id
                }
            }
        )
        .then(() => Post.findByPk(id))
        return postPromise
        .then(() => this.read())
    },

    delete: function(id) {
        return Post.destroy({
            where: {
                id
            }
        })
        .then(() => this.read())
    },    
}
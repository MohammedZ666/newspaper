const Article = require('../model/article');
const Editor = require('../model/editor');
const bcrypt = require('bcrypt')
const publish = async (req, res) => {
    try {
        const editor = await Editor.findOne({
            email: req.body.email
        })

        if (!editor || !bcrypt.compareSync(req.body.password, editor.password)) return res.status(400).json({
            msg: "Editor not authorized, contact admin"
        })


        let keys = Object.keys(req.body)
        keys.forEach((item) => {
            if (!req.body[item]) return res.status(400).json({
                msg: `${item} is empty`
            })
        })
        const {
            title,
            author,
            content
        } = req.body
        const article = await Article.create({
            title,
            author,
            content
        })
        return res.status(200).json({
            msg: "Success!"
        });
    } catch (err) {
        res.status(400).json({
            msg: `Article publication failed ${err}`
        })
    }
}

const get_list = async (req, res) => {
    try {
        const articles = await Article.find({}).select('-content -author');
        return res.status(200).json({
            articles
        })
    } catch (error) {
        res.status(400).json({
            msg: `No article found ${err}`
        })
    }
}
const get = async (req, res) => {
    const id = req.params.id
    try {
        const article = await Article.findById({
            "_id": id
        });
        return res.status(200).json({
            article
        })
    } catch (err) {
        res.status(400).json({
            msg: `No article found ${err}`
        })
    }
}
module.exports = {
    publish,
    get_list,
    get
}
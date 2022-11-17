const Editor = require('../model/editor');
const bcrypt = require('bcrypt')

const create = async (req, res) => {
    try {
        let {
            adminEmail,
            adminPassword,
            email,
            password
        } = req.body

        if (!(adminEmail === process.env.ADMIN_EMAIL && adminPassword === process.env.ADMIN_PASSWORD)) return res.status(400).json({
            msg: "Admin email or password is wrong"
        })

        if (!(email || password)) return res.status(400).json({
            "msg": "Editor email or password field is empty"
        });

        password = bcrypt.hashSync(password, bcrypt.genSaltSync())
        let editor = await Editor.findOneAndUpdate({
            role: "editor"
        }, {
            email,
            password
        }, {
            upsert: true,
        });
        return res.status(200).json({
            msg: "Success!"
        });
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            msg: `Editor creation failed ${err}`
        })
    }
}
const get = async (req, res) => {
    try {
        const editor = await Editor.findOne({
            role: "editor"
        })

        return res.status(200).json({
            msg: editor
        })
    } catch (err) {
        return res.status(400).json({
            msg: `Editor not found failed ${err}`
        })
    }
}
module.exports = {
    create,
    get
}
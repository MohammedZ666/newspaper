const {
    model,
    Schema
} = require("mongoose");

const Article = model("Article", Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
}, {
    timestamps: true
}))

module.exports = Article
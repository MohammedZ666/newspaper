const {
    model,
    Schema
} = require("mongoose");

const Editor = model("Editor", Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "editor"
    }
}, {
    timestamps: true
}))

module.exports = Editor
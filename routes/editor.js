const router = require("express").Router();
const {
    create,
    get
} = require("../controller/editor")

router.post("/create", create);
router.get("/", get);

module.exports = router
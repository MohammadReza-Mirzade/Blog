const express = require('express');
const router = express.Router();
const home = require("./home");
const about = require("./about");
const contact = require("./contact");
const error404 = require("./404");
const error500 = require("./500");
const product = require("./product");


router.get('/', function (req, res){
    res.redirect('/home');
});
router.use("/home", home);
router.get("/about", about);
router.get("/contact", contact);
router.use("/product", product);
router.use(error500);
router.use(error404);


module.exports = router;
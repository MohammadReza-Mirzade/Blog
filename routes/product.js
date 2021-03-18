const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.use("/:link", function (req, res, next){
    fs.readFile(path.join(__dirname, "../db/data.json"), "utf8", function (err, data) {
        if (err){return res.status(500).render('pages/500')};
        let product = JSON.parse(data).find(function (element){
            return element["id"] === req.params["link"];
        });
        if(!product) return next();
        res.render("./pages/product", {product: product});
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');


router.get("/", function (req, res){
    fs.readFile(path.join(__dirname, "../db/data.json"), "utf8", function (err, data) {
        if (err){return res.status(500).render('pages/500')};
        res.render("./pages/home", {products:JSON.parse(data)});
    });
});

router.post("/", function (req, res){
    fs.readFile(path.join(__dirname, "../db/data.json"), "utf8", function (err, data) {
        if (err){return res.status(500).render('pages/500')};
        let products = JSON.parse(data).filter((value) => {
            if (!(value.name.includes(req.body.search) || value.color.includes(req.body.search) || value.drivetrain.includes(req.body.search))) return true;
            return false;
        });
        let ids = [];
        products.forEach(function (value){
            ids.push(value.id);
        });
        res.send(ids);
    });
});


module.exports = router;
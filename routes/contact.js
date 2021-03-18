const express = require('express');
const router = express.Router();

router.use('/', function (req, res){
    res.render('./pages/contact');
});

module.exports = router;
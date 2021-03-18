const express = require('express');
const router = express.Router();

router.use('/', function (req, res){
    res.render('./pages/about');
});

module.exports = router;

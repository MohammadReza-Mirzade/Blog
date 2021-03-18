module.exports = function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('pages/500');
};
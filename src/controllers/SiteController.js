class SiteController {
    //[GET] /
    home(req, res, next) {
       res.send('Hello express');
    }
}

module.exports = new SiteController();
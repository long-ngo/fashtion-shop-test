class UserController {
    //[GET] /users
    home(req, res, next) {
       res.send('Hello user');
    }
}

module.exports = new UserController();
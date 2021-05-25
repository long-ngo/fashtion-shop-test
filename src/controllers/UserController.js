const User = require('../models/User');

class UserController {
    //[GET] api/users
    getUsers(req, res, next) {
        User.find({})
            .then(users => {
                res.send(users);
            })
            .catch(next);
    }
}

module.exports = new UserController();

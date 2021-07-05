const User = require('../models/User');

class UserController {
    //[GET] api/users
    getUsers(req, res, next) {
        User.find({})
            .then((users) => {
                res.send(users);
            })
            .catch(next);
    }

    //[GET] api/users/:id
    getUserById(req, res, next) {
        User.find({ _id: req.params.id })
            .then((users) => {
                res.send(users);
            })
            .catch(next);
    }

    //[PUT] api/users/:id
    editUserById(req, res, next) {
        User.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.send('Done!'))
            .catch(next);
    }
}

module.exports = new UserController();

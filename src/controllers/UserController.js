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

    //[POST] api/users/create
    createUser(req, res, next) {
        const user = new User(req.body);
        user.save()
            .then(() => res.send('Done!'))
            .catch(next);
    }

    //[PUT] api/users/:id
    editUserById(req, res, next) {
        User.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.send('Done!'))
            .catch(next);
    }

    //[DELETE] api/users/:id
    deleteUserById(req, res, next) {
        User.deleteOne({ _id: req.params.id })
            .then(() => res.send('Done!'))
            .catch(next);
    }
}

module.exports = new UserController();

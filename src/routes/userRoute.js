const express = require('express');
const UsersController = require('../controllers/UserController');

const router = express.Router();

router.get('/', UsersController.getUsers);
router.get('/:id', UsersController.getUserById);

router.post('/create', UsersController.createUser);
router.put('/:id', UsersController.editUserById);
router.delete('/:id', UsersController.deleteUserById);

module.exports = router;

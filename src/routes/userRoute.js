const express = require('express');
const UsersController = require('../controllers/UserController');

const router = express.Router();

router.get('/', UsersController.getUsers);
router.get('/:id', UsersController.getUserById);

router.put('/:id', UsersController.editUserById);

module.exports = router;

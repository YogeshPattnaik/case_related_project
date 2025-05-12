var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/getUserList', userController.getUsers);
/** Post users */
router.post('/createUser', userController.createUser);

module.exports = router;

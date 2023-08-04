var express = require('express');
var router = express.Router();
let authController=require('../controllers/auth.controller');

/* GET users listing. */
router.post('/login',authController.UserLogin);

module.exports = router;
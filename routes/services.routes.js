var express = require('express');
var router = express.Router();
let servicesController=require('../controllers/services.controller');
let upload=require('../controllers/upload')

/* GET users listing. */
router.get('/get',servicesController.getAllservices);
router.post('/create',upload.single('sImage'),servicesController.createservices);
router.post('/update',upload.single('sImage'),servicesController.updateservices);

module.exports = router;
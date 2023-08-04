var express = require('express');
var router = express.Router();
let subservicesController=require('../controllers/subservices.controller');
let upload=require('../controllers/upload');

/* GET users listing. */
router.get('/get',subservicesController.getAllsubservices);
router.post('/create',upload.single('subSImage'),subservicesController.createsubservices);
router.post('/update',upload.single('subSImage'),subservicesController.updatesubservice);


module.exports = router;
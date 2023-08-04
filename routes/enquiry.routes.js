var express = require('express');
var router = express.Router();
let enquiryController=require('../controllers/enquiry.controller');

/* GET users listing. */
router.get('/get',enquiryController.getAllEnquiry);
router.post('/create',enquiryController.createEnquiry);
router.post('/update',enquiryController.updateEnquiry);

module.exports = router;
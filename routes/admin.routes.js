var express = require('express');
var router = express.Router();
const multer=require('multer');
let adminController=require('../controllers/admin.controller');
let upload=require('../controllers/upload');
let {body}=require('express-validator');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
      const uniqueSuffix = Date.now();
      cb(null, file.fieldname + '-' + uniqueSuffix+ext)
    }
  })
  
  const upload1 = multer({ storage: storage })

/* GET users listing. */
router.post('/get',adminController.getAlladmin);
router.post('/getEnquiry',adminController.getNewEnquiry);
router.post('/updateflag',adminController.seenEnquiry);
router.post('/create',upload1.single('Profile'),adminController.createadmin);
router.post('/update',upload.single('img'),adminController.updateadmin);

module.exports = router;

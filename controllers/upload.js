
const multer=require('multer');
let path=require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/images/')
    },
    filename: function (req, file, cb) {
        let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
      const uniqueSuffix = Date.now();
      cb(null, file.fieldname + '-' + uniqueSuffix+ext)
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports=upload;

  
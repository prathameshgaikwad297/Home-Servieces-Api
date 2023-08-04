const db = require("../model/index");
const admin = db.admin;
const jwt=require('jsonwebtoken');
const bcrypt = require("bcrypt");

module.exports={
    UserLogin: (req, res) => {
        const Password=req.body.Password;
        console.log(Password);
        admin
          .findAll({ where: { Email: req.body.userName } })
          .then((admin) => {
           
            const isSame=bcrypt.compareSync(Password,admin[0].Password);
            if(isSame){
                let token=jwt.sign({aid:admin[0].aid,userType:admin[0].userType},'privatekey',{expiresIn:'1h'});
                res.send({error:false, token:token,message:'Logged in'})
            }else{
                res.send({error:true,message:'incorrect username and password'});
            }
    
          })
          .catch((err) => {
            res.send(err.message);
          });
      },
}
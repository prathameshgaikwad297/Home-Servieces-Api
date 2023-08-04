
const db=require('../model/index');
const enquiry=db.enquiry

module.exports={
    getAllEnquiry:(req,res)=>{
        // sequelize.query('select * from users');

        enquiry.findAll({}).then((result)=>{
            res.send({error:true,data:result});
        }).catch((err)=>{
            res.send({error:false,message:err.message});
        })
    },

    createEnquiry:(req,res)=>{
        // sequelize.query('select * from users');
        const info={
            subSid:req.body.subSid,
            userName:req.body.userName,
            userMobile:req.body.userMobile,
            desc:req.body.desc
        }
        enquiry.create(info).then((result)=>{
            res.send({error:false,data:result,seeflag:1});
        }).catch((err)=>{
            res.send({error:true,message:err.message});
        })
    },

    updateEnquiry:(req,res)=>{
        // sequelize.query('select * from users');
        const eid=req.params.eid;
       // sequelize.query('select * from users');
       const info={
        userName:req.body.userName,
        userMobile:req.body.userMobile,
        desc:req.body.desc
    }
    enquiry.update(info,{where:{eid:eid}}).then((result)=>{
            res.send({error:false,messsage:"Enquiry updated successfully!!"});
        }).catch((err)=>{
            res.send({error:true,message:err.message});
        })
    },

    

}
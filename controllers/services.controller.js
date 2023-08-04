
const db=require('../model/index');
const bcrypt = require('bcrypt');

const services=db.services

module.exports={
    getAllservices:(req,res)=>{
        // sequelize.query('select * from users');

        services.findAll({}).then((result)=>{
            res.send({error:true,data:result});
        }).catch((err)=>{
            res.send({error:false,message:err.message});
        })
    },

    createservices:(req,res)=>{
        // sequelize.query('select * from users');
            const serv={
                sName:req.body.sName,
                sImage:req.file.filename,
                sdesc:req.body.sdesc
            }
            services.create(serv).then((result)=>{
                res.send({error:false,messsage:"services created successfully!!"});
            }).catch((err)=>{
                res.send({error:true,message:err.message});
            })

      
    },

    updateservices:(req,res)=>{
        // sequelize.query('select * from users');
        const sid=req.params.sid;
        if(userType==='admin'){
          
            const serv={
                sName:req.body.sName,
                sImage:req.body.sImage,
                sdesc:req.body.sdesc
            }
            services.update(serv,{where:{sid:sid}}).then((result)=>{
                res.send({error:false,messsage:"services updated successfully!!"});
            }).catch((err)=>{
                res.send({error:true,message:err.message});
            })
        }else{
            res.send({error:true,message:"Access denied!!"})
        }
    },
    deleteservices:(req,res)=>{
        const sid=req.params.sid;
        services.delete(data,{where:{sid:sid}}).then((result)=>{
            res.send({error:false,message:"Services deleted succeessfully!!"});
        }).catch((err)=>{
            res.send({error:true,message:err.message})
        })
    },
}
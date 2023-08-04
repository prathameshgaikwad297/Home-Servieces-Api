
const db=require('../model/index');
const subservices=db.subservices;

module.exports={
    getAllsubservices:(req,res)=>{
        // sequelize.query('select * from users');

        subservices.findAll({where:{sid:1}}).then((result)=>{
            res.send({error:true,data:result});
        }).catch((err)=>{
            res.send({error:false,message:err.message});
        })
    
    },

    createsubservices:(req,res)=>{
        // sequelize.query('select * from users');     
            const subs={
                sid:req.body.sid,
                subSName:req.body.subSName,
                subSImage:req.file.filename,
                subSDesc:req.body.subSDesc
            }
            subservices.create(subs).then((result)=>{
                res.send({error:false,messsage:"subServices created successfully!!"});
            }).catch((err)=>{
                res.send({error:true,message:err.message});
            })

        },

    updatesubservice:(req,res)=>{
        // sequelize.query('select * from users');
        const subSid=req.params.subSid;
        if(userType==='admin'){
          
            const subs={
                sName:req.body.sName,
                sImage:req.file.img,
                sdesc:req.body.sdesc
            }
            subservices.update(subs,{where:{subSid:subSid}}).then((result)=>{
                res.send({error:false,messsage:"services updated successfully!!"});
            }).catch((err)=>{
                res.send({error:true,message:err.message});
            })
        }else{
            res.send({error:true,message:"Access denied!!"})
        }

    },
    deletesubservices:(req,res)=>{
        const subSid=req.params.subSid;
        subservices.delete(data,{where:{subSid:subSid}}).then((result)=>{
            res.send({error:false,message:"Subservices deleted succeessfully!!"});
        }).catch((err)=>{
            res.send({error:true,message:err.message})
        })
    },
}
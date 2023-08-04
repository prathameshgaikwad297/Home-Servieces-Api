module.exports =(sequelize,Sequelize)=>{
    const model=sequelize.define('enquiry',{
        eid:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false
        },
        subSid:{
            type: Sequelize.INTEGER,
            allowNull:false,
        },
        userName:{
            type: Sequelize.STRING(200),
            allowNull: false, 
        },
        userMobile:{
            type: Sequelize.STRING(200),
            allowNull: false, 
        },
        desc:{
            type: Sequelize.STRING(500),
            allowNull: false, 
        },
        seeflag:{
            type:Sequelize.STRING(10),
            defaultValue:0,
        }
    },
    {
        freezeTableName: true,
    });

    return model;

}
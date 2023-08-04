
module.exports =(sequelize,Sequelize)=>{
    const model=sequelize.define('subServices',{
        subSid:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false
        },
        sid:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        subSName:{
            type:Sequelize.STRING(100),
            allowNull:false
        },
        subSImage:{
            type:Sequelize.STRING(100),
            allowNull:false
        },
        subSDesc:{
            type:Sequelize.STRING(500),
            allowNull:false
        },
    },
    {
        freezeTableName: true,
    });

    return model;

}
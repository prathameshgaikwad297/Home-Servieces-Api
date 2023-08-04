module.exports =(sequelize,Sequelize)=>{
    const model=sequelize.define('admin',{
        aid:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userType:{
            type: Sequelize.STRING(200),
            allowNull: true, 
        },
        Name:{
            type: Sequelize.STRING(200),
            allowNull: false, 
        },
        Mobile:{
            type: Sequelize.STRING(20),
            allowNull: false, 
        },
        Email:{
            type: Sequelize.STRING(100),
            allowNull: false, 
        },
        Password:{
            type: Sequelize.STRING(200),
            allowNull: false
        },
        Profile:{
            type:Sequelize.STRING(100),
            allowNull:false
        },
    },
    {
        freezeTableName: true,
    });

    return model;

}
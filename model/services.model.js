
module.exports =(sequelize,Sequelize)=>{
    const model=sequelize.define('services',{
        sid:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        sName:{
            type:Sequelize.STRING(100),
            allowNull:true
        },
        sImage:{
            type:Sequelize.STRING(100),
            allowNull:true
        },
        sdesc:{
            type:Sequelize.STRING(500),
            allowNull:true
        },
    },
    {
        freezeTableName: true,
    });

    return model;

}
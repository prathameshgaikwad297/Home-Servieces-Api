const { Sequelize } = require('sequelize');
// const connection = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
//   });

const sequelize = new Sequelize('test', 'root', '',{
    host: 'localhost',
    dialect:'mysql',
    /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully.');
  }).catch(err =>{
    console.error('Unable to connect to the database:', err.message);
  })
    
  const db={};

  db.sequelize=sequelize; //sequelize:sequelize 
  db.Sequelize=Sequelize;

db.admin=require('./admin.model')(sequelize,Sequelize);
db.services=require('./services.model')(sequelize,Sequelize);
db.subservices=require('./subservices.model')(sequelize,Sequelize);
db.enquiry=require('./enquiry.model')(sequelize,Sequelize);

module.exports =db;
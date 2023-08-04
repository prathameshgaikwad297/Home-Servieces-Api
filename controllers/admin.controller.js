const db = require("../model/index");
const bcrypt = require("bcrypt");

const admin = db.admin;
let enquiry = db.enquiry;

module.exports = {
  getAlladmin: (req, res) => {
    // sequelize.query('select * from users');

    admin
      .findAll({})
      .then((result) => {
        res.send({ error: false, data: result });
      })
      .catch((err) => {
        res.send({ error: true, message: err.message });
      });
  },

  getNewEnquiry: (req, res) => {
    
    enquiry
      .findAll({ where: { seeflag: 0 } })
      .then((result) => {
        res.send({ error: false, data: result });
      })
      .catch((err) => {
        res.send({ error: true, message: err.message });
      });

    },

    seenEnquiry:(req,res)=>{
        const info = {
            seeflag: 1,
          };
        enquiry
          .update(info, { where: { seeflag: 0 } })
          .then((result) => {
            res.send({ error: false, data: result });
          })
          .catch((err) => {
            res.send({ error: true, message: err.message });
          });
    },

  createadmin: (req, res) => {
    // sequelize.query('select * from users');

    console.log(req.body);
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(req.body.Password, salt);
    const info = {
      userType: req.body.userType,
      Name: req.body.Name,
      Mobile: req.body.Mobile,
      Email: req.body.Email,
      Password: hashPassword,
      Profile: req.file.filename,
    };
    admin
      .create(info)
      .then((result) => {
        res.send({ error: false, data: result });
      })
      .catch((err) => {
        res.send({ error: true, message: err.message });
      });
  },

  updateadmin: (req, res) => {
    // sequelize.query('select * from users');
    const aid = req.params.aid;
    const info = {
      name: req.body.name,
      mobile: req.body.Mobile,
      email: req.body.email,
      password: req.body.password,
      profile: req.file.filename,
    };
    admin
      .update(info, { where: { aid: aid } })
      .then((result) => {
        res.send({ error: false, messsage: "Admin updated successfully!!" });
      })
      .catch((err) => {
        res.send({ error: true, message: err.message });
      });
  },

  deleteadmin: (req, res) => {
    const aid = req.body.aid;
    admin
      .delete(admin, { where: { aid: aid } })
      .then((result) => {
        res.send({ error: false, message: "Admin Deleted successfully!" });
      })
      .catch((err) => {
        res.send({ error: true, message: err.message });
      });
  },
};
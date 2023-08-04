var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db=require('./model/index');



var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin.routes');
var authRouter=require('./routes/auth.routes');
var servicesRouter=require('./routes/services.routes');
var subservicesRouter=require('./routes/subservices.routes');
var enquiryRouter=require('./routes/enquiry.routes');
var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

db.sequelize.sync({});

app.use('/', indexRouter);
app.use('/admin',adminRouter);
app.use('/auth',authRouter);
app.use('/services',servicesRouter);
app.use('/subservices',subservicesRouter);
app.use('/enquiry',enquiryRouter);

module.exports = app;

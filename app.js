var express=require('express');
var redirect=require('express-redirect');
var cors=require('cors');

var app=express();
redirect(app);
var router=express.Router();
var server=require('http').createServer(app);
var mongoose=require('mongoose');

var mongoDB='mongodb+srv://Vikrant:mongodb@1401@cluster0-qd890.mongodb.net/OTP';

mongoose.connect(mongoDB,{useNewUrlParser:true, useCreateIndex: true});

mongoose.connection.on('error',(err)=>{
	console.log('DB connection error');
});

mongoose.connection.on('connected',(err)=>{
	console.log('DB connected');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

server.listen(process.env.PORT||3000, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log('App listening at http://%s:%s', host, port);
});

app.use(router);
require('./routes/sendOtp')(app);
require('./routes/verifyOtp')(app);
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

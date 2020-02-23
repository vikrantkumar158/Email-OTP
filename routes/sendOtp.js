var otp=require('../models/otp');
var generate=require('../models/generate');
var bcrypt=require('../models/bcrypt');

module.exports = (app)=>{
	
	app.get('/',(req,res)=>{
		res.render('sendOtp.ejs');
	});

	app.post('/send',(req,res)=>{
		console.log(process.env.emailID);
		var x=generate.generateOtp();
		var y=bcrypt.encrypt(x);
		otp.send({
			from: process.env.emailID,
			to: req.body.email,
			subject: 'Email Verification',
			html: 'Your OTP for Email Verification is <b>'+x+'</b>'
		},(err,data)=>{
			if(err)
				res.send(err);
			res.render('verifyOtp.ejs',{email:req.body.email,hash:y});
		});
	});

	app.post('/api/send',(req,res)=>{
		var x=generate.generateOtp();
		var y=bcrypt.encrypt(x);
		otp.send({
			from: process.env.emailID,
			to: req.body.email,
			subject: 'Email Verification',
			html: 'Your OTP for Email Verification is <b>'+x+'</b>'
		},(err,data)=>{
			if(err)
				res.send(err);
			res.send(y);
		});
	});

};

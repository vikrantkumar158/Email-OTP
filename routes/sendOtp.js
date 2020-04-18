var sendotp=require('../models/sendotp');
var generate=require('../models/generate');
var otp=require('.././controllers/otp');

module.exports = (app)=>{
	
	app.get('/',(req,res)=>{
		res.render('sendOtp.ejs');
	});

	app.post('/send',(req,res)=>{
		var x=generate.generateOtp();
		var mailOptions={
			from: process.env.emailID,
			to: req.body.email,
			subject: 'Email Verification',
			html: 'Your OTP for Email Verification is <b>'+x+'</b>'
		};
		sendotp.send(mailOptions,(err,data)=>{
			if(err)
				res.send(err);
			else
			{
				otp.save(req.body.email,x,(error,dataa)=>{
					if(error)
						res.send(error);
					res.render('verifyOtp.ejs',{email:req.body.email});
				});
			}
		});
	});

	app.post('/api/send',(req,res)=>{
		var x=generate.generateOtp();
		var mailOptions={
			from: process.env.emailID,
			to: req.body.email,
			subject: 'Email Verification',
			html: 'Your OTP for Email Verification is <b>'+x+'</b>'
		};
		sendotp.send(mailOptions,(err,data)=>{
			if(err)
				res.send(err);
			otp.save(req.body.email,x,(error,dataa)=>{
				if(error)
					res.send(error);
				res.end();
			});
		});
	});
};

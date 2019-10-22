"use strict";

var nodemailer=require('nodemailer');
var transporter = nodemailer.createTransport({
	service:'gmail',
	auth:{
		user: '***********************',
		pass: '***********************'
	}
});

exports.send = (email,otp,cb)=>
{
	var mailOptions={
		from: '***********************',
		to: email,
		subject: 'OTP Verification',
		text: 'Your OTP is '+otp+'. It is valid for only five miniutes'
	}
	transporter.sendMail(mailOptions,(err,info)=>{
		if(err)
			cb(err);
		cb(null,info);
	});
}
"use strict";

var nodemailer=require('nodemailer');
var transporter = nodemailer.createTransport({
	service:'gmail',
	auth:{
		user: 'vikrantkumar158@gmail.com',
		pass: 'windowsvista8986761191$'
	}
});

exports.send = (mailOptions,cb)=>
{
	transporter.sendMail(mailOptions,(err,info)=>{
		if(err)
			cb(err);
		cb(null,info);
	});
}
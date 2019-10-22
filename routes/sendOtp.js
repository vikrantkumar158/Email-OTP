var otp=require('../models/otp');
var generate=require('../models/generate');
var bcrypt=require('../models/bcrypt');

module.exports = (app)=>{
	
	app.get('/send',(req,res)=>{
		res.render('sendOtp.ejs');
	});

	app.post('/send',(req,res)=>{
		var x=generate.generateOtp();
		var y=bcrypt.encrypt(x);
		otp.send(req.body.email,x,(err,data)=>{
			if(err)
				res.send(err);
			res.render('verifyOtp.ejs',{email:req.body.email,hash:y});
		});
	});
};

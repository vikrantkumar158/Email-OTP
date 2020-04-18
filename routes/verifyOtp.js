var bcrypt=require('../models/bcrypt');
var otp=require('.././controllers/otp');

module.exports = (app)=>
{
	app.post('/verify',(req,res)=>{
		otp.match(req.body.email,req.body.otp,(err,data)=>{
			if(err)
				res.send(err);
			if(data==undefined)
				res.send("OTP Expired. Kindly try to resend it.");
			else if(data==true)
			{
				otp.remove(req.body.email,(error,dataa)=>{
					if(error)
						res.send(error);
					else
						res.send("Success. Verified.");
				})
			}
			else
				res.send("Failure. Kindly check again.");
		})
	});
	
	app.post('/api/verify',(req,res)=>{
		otp.match(req.body.email,req.body.otp,(err,data)=>{
			if(err)
				res.send(err);
			if(data==undefined||data==false)
				res.send("Failure");
			else if(data==true)
			{
				otp.remove(req.body.email,(error,dataa)=>{
					if(error)
						res.send(error);
					else
						res.send("Success");
				})
			}
		})
	});
}
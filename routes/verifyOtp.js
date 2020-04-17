var bcrypt=require('../models/bcrypt');
var otp=require('.././controllers/otp');

module.exports = (app)=>
{
	app.post('/verify',(req,res)=>{
		console.log(req.body.email);
		otp.match(req.body.email,req.body.otp,(err,data)=>{
			if(err)
				res.send(err);
			if(data==true)
				res.send("Success");
			else
				res.send("Failure");
		})
	});
}
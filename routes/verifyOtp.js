var otp=require('../models/otp');
var bcrypt=require('../models/bcrypt');

module.exports = (app)=>
{
	app.post('/verify',(req,res)=>{
		if(bcrypt.match(req.body.otp,req.body.hash))
			res.send("Success");
		else
			res.send("Failure");
	});
}
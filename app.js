var express=require('express');
var redirect=require('express-redirect');
var cors=require('cors');

var app=express();
redirect(app);
var router=express.Router();
var server=require('http').createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

server.listen(process.env.PORT||3000, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log('Example app listening at http://%s:%s', host, port);
});

app.use(router);
require('./routes/sendOtp')(app);
require('./routes/verifyOtp')(app);
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

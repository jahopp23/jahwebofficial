// Require the Express module
// https://npmjs.com/package/express
var express = require('express');
var bodyParser = require('body-parser');
// Create a new application instance
var app = express();
// nodemailer for email 
// var nodemailer = require('nodemailer');
var fa = require('fontawesome');

// Use Express's built-in static file server
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
// app.use('/js', express.static(__dirname + '/node_modules/popper/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
// font awesome components
app.use('/components-font-awesome/css', express.static(__dirname + '/bower_components/components_font_awesome/css'));
 // redirect CSS bootstrap

app.get('/', function(req, res){
	res.render('index');
});

// app.get('/contact', function(req, res){
// 	res.send('contact success');
// })

// Also respond to `GET` requests at the path '/hi'
app.get('/hi', function(req, res){
   res.send('Hello from Express!'); 
});

// POST route for contact form 
// app.post('/contact', function (req, res) {
// 	let mailOpts, smtpTrans;
// 	smtpTrans = nodemailer.createTransport({
// 		host: 'smtp.gmail.com',
// 		port: 465,
// 		secure: true,
// 		auth: {
// 			user: 'jahopp@gmail.com',
// 			pass:  GMAIL_PASS

// 		}
// 	});
// 	mailOpts = {
// 		from: req.body.name + ' &lt;' + req.body.email + '&gt;',
//         to: 'jahopp@gmail.com',
//         subject: 'New message from contact form at tylerkrys.ca',
//         text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
// 	};
// 	smtpTrans.sendMail(mailOpts, function (error, response) {
// 		if (error) {
// 			res.render('contact failure.');
// 		}
// 		else {
// 			res.render('contact success!');
			
// 		}
// 	});
// });

// Listen on port 8080 for Cloud9
// https://docs.c9.io/docs/run-an-application#section-environment-variables
app.listen(8080);

// Log a message to the console.
console.log("Server is up!");
console.log("Port: 8080.");



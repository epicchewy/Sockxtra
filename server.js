var ws = require('ws').Server;
var wss = new ws({port:8888});
var fs = require('fs');
var zlib = require('zlib');
var gzip = zlib.createGzip(); 


wss.on("connection", function(e) {
	e.on('message', function(message) {
		var message = JSON.parse(message); 

		
		console.log(JSON.parse(message));

	})
	//e.send("blah");
	fs.readFile("/Users/andrewaday/Pictures/IMG_0043.JPG", function(er, data) {
		
		e.send(new Buffer(data).toString("base64"));
	});
});
// var c = net.createServer(function(e) {
// 	console.log("holy it works");
// 	e.on('end', function(er) {
// 		console.log("ayy lmao");
// 	});
// 	e.on('message', function(er) {
// 		console.log(er);
// 	})
// 	e.write("blah");
// 	e.pipe(e);
// 	fs.readFile("/Users/andrewaday/Pictures/IMG_0043.JPG", function(er, data) {

// 		// e.write(new Buffer(data.toString("base64")));
// 	});
// });
// c.listen(8888, function() {
// 	console.log('log')
// });
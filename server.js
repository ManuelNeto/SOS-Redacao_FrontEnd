var express = require('express');
const PORT = process.env.PORT || 8080;
var app = express();

app.use('/', express.static(__dirname));

app.get('/', function(req, res){
	res.render('./index.html');
})

app.listen(PORT, function(){
	console.log('server running on port ' + PORT);
});
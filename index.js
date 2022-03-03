const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var url = require('url');
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/calculate', (request, response) => {
	console.log('Calling "/calculate" on the Node.js server.')
	var inputs = url.parse(request.url, true).query
	//everything up here  ^ leave it be

	//these are the ints of the values that we assigned them in the html page
	//also leave these alone, but you need to use them
	let age = parseInt(inputs.age)
	let height = parseInt(inputs.height)
    let weight = parseInt(inputs.weight)
    let blood = parseInt(inputs.blood)
  	let family = parseInt(inputs.family)

	//calulations go here!






	//sum should be returning a string of the final conseses of the health
	//of the user
	//right now its just a dummy calulation for display
	let sum = age+height+weight+blood+family
  	
	//leave below alone
	console.log("calculate ran")
	response.type('text/plain')
	response.send(sum.toString())
})


app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
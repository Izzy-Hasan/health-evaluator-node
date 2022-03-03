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
	let age = parseInt(inputs.age)
	let height = parseInt(inputs.height)
  let weight = parseInt(inputs.weight)
  let blood = parseInt(inputs.blood)
  let family = parseInt(inputs.family)



	let sum = age+height+weight+blood+family
  console.log("calculate ran")
	response.type('text/plain')
	response.send(sum.toString())
})


app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
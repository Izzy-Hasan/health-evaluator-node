const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/calculate', (request, response) => {
	console.log('Calling "/add-two-integers" on the Node.js server.')
	var inputs = url.parse(request.url, true).query
	let age = (inputs.age)
	let height = (inputs.height)
  let weight = (inputs.weight)
  let blood = (inputs.blood)
  let family = (inputs.family)



	let sum = x + y
	response.type('text/plain')
	response.send(sum.toString())
})


app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
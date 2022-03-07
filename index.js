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
	let bmi;
	console.log("init height ", height)
	console.log("init weight ", weight)
	  if (height == 1) {
		if (weight == 1){
			//normal
			bmi = 0;
		}
		if (weight == 2){
			//normal
			bmi = 0;
		}
		if (weight == 3){
			//overweight
			bmi = 30;
		}
		if (weight == 4){
			//obese
			bmi = 75;
		}
		if (weight == 5){
			//obese
			bmi = 75;
		}
		if (weight == 6){
			//obese
			bmi = 75;
			
		}
	  }

	  if (height == 2) {
		if (weight == 1){
			//underweight
			bmi = 75;

		}
		if (weight ==2){
			//healthy
			bmi = 0;
		}
		if (weight == 3){
			//healthy
			bmi = 0;
		}
		if (weight == 4){
			//overweight
			bmi = 30;
		}
		if (weight == 5){
			//overweight
			bmi = 30;
		}
		if (weight == 6){
			//obese
			bmi = 75;
		}
	  }

	  if (height == 3) {
		if (weight == 1){
			//underweight
			bmi = 75;
		}
		if (weight == 2){
			//healthy
			bmi = 0;
		}
		if (weight == 3){
			//healthy
			bmi = 0;
		}
		if (weight == 4){
			//healthy
			bmi = 0;
		}
		if (weight == 5){
			//overweight
			bmi = 30;
		}
		if (weight == 6){
			//obese
			bmi = 75;
		}
	  }

	  if (height == 4) {
		if (weight ==1){
			//underweight
			bmi = 75;
		}
		if (weight == 2){
			//underweight
			bmi = 75;
		}
		if (weight == 3){
			//healthy
			bmi = 0;
		}
		if (weight == 4){
			//healthy
			bmi = 0;
		}
		if (weight == 5){
			//overweight
			bmi = 30;
		}
		if (weight == 6){
			//overweight
			bmi = 30;
		}
	  }

	  if (height == 5) {
		if (weight == 1){
			//underweight
			bmi = 75;
		}
		if (weight == 2){
			//underweight
			bmi = 75;
		}
		if (weight == 3){
			//underweight
			bmi = 75;
		}
		if (weight == 4){
			//healthy
			bmi = 0;
		}
		if (weight == 5){
			//healthy 
			bmi = 0;
		}
		if (weight == 6){
			//overweight
			bmi = 30
		}
	  }

	    let risk = "Your Calculated Risk Category is ";
		let sum = age+blood+family+bmi
         console.log("sum ", sum)

  	  if(sum <= 20){
		risk = risk +"low risk"
	  }
	  else if(sum <= 50){
		risk = risk + "moderate risk"
	  }
	  else if(sum <= 75){
		risk = risk + "high risk"
	  }
	  else{
		risk = risk + "uninsurable"
	  }
		console.log("risk= ", risk)

	  console.log("age ",age)
	  console.log("height ",height)
	  console.log("weight ",weight)
	  console.log("bmi ",bmi)
	  console.log("blood ",blood)
	  console.log("family ",family)
	//leave below alone
	console.log("calculate ran")
	response.type('text/plain')
	response.send(risk.toString())
})


app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
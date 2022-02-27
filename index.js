const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get("/getall", function (request, response){
  var message1 = request.query.message1;

  if (message1 <= 100 && message1 > 0) {
      response.send("thank you");
  } else {
      response.send("Please provide an appropriate age. ");
  }
});
app.get("/getall", function (request, response){
  var message2 = request.query.message2;

  if (message2 <= 100 && message2 > 0) {
      response.send("thank you");
  } else {
      response.send("Please provide an appropriate age. ");
  }
});

app.get("/getall", function (request, response){
  var message3 = request.query.message3;

  if (message3 <= 100 && message3 > 0) {
      response.send("thank you");
  } else {
      response.send("Please provide an appropriate age. ");
  }
});

app.get("/getall", function (request, response){
  var message4 = request.query.message4;

  if (message4 <= 100 && message4 > 0) {
      response.send("thank you");
  } else {
      response.send("Please provide an appropriate age. ");
  }
});

app.get("/getall", function (request, response){
  var message5 = request.query.message5;

  if (message5 <= 100 && message5 > 0) {
      response.send("thank you");
  } else {
      response.send("Please provide an appropriate age. ");
  }
});


app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
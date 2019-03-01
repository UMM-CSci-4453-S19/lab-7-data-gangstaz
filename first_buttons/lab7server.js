var express=require('express'),
app = express(),
port = process.env.PORT || 1337;
var promise1=require('./button-promise.js');


app.use(express.static(__dirname + '/public')); //Serves the web pages
app.get("/buttons",function(req,res){ // handles the /buttons API

  promise1.buttons.then(function(buttons){
      // get the button array from the promise
      res.send(buttons);
      })
      .catch(function(err){console.log("DANGER:",err)});
});

app.listen(port);

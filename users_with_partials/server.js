var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname + "./client")))

app.listen(4321, function(){
  console.log('PORT4321!')
})

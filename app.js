
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('<h1>Vehicle Record</h1><br> Volkswagen, Tesla, BMW')
})

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});


app.listen(8089, function () {
  console.log('app listening on port 8085!')
})

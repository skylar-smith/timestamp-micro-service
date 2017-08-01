// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});



app.get("/dreams", function (request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

app.get("/:timestamp", function (req, res) {
  var timestampString = req.params.timestamp;
  var datetime;
  var resBody = {
    unix: null,
    natural: null
  }
  console.log(parseInt(timestampString));
  if(parseInt(timestampString) === NaN) {
  console.log('hit');
    datetime = new Date(timestampString);
  } else {
    datetime = new Date(parseInt(timestampString));
  }
  res.end(JSON.stringify(resBody));
  console.log(timestampString);
  console.log(datetime.toDateString());
  resBody.unix = datetime.valueOf();
  resBody.natural = datetime.toDateString();
  res.end(JSON.stringify(resBody));
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory

// app.use(express.static(__dirname + '/dist/school-project'));

app.use(express.static(__dirname + '/dist/school-project'), function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://0e802cd7.ngrok.io/graphql/');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/school-project/index.html'));
});

// Start the app by listening on the default Heroku port

// app.listen(process.env.PORT || 4200);
app.listen(process.env.PORT || 4200, function() {
  console.log('The server is running.');
});



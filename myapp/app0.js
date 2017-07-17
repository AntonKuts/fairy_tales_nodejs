var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");
// var hbs = require("hbs");

var app = express();
var jsonParser = bodyParser.json();

app.use(express.static(__dirname + "/public"));

app.post("/name", jsonParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.json(`user - ${request.body.user}; password -  ${request.body.password}`);
    response.end();
});

app.post("/number", jsonParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.json(`${request.body.number*5}`);
    response.end();
});

app.post("/file", jsonParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.json(`${request.body.fileName}`+'.txt');
    fs.appendFile(`${request.body.fileName}`+'.txt', `${request.body.textForFile}` + "\n");
    response.end();
});

app.get("/", function(request, response){
    response.send("<h1>Главная страница</h1>");
});

// app.post("/arr", function (request, response) {
//   const texts = './texts/';
//   let filenames = [];
//   fs.readdir(texts, (err, files) => {
//     files.forEach(file => {
//       filenames.push(file);
//     })
//     response.send(filenames);
//   });
// });

app.post("/arr", function (request, response) {
  const texts = './texts/';
  let filenames = [];
  fs.readdir(texts, (err, files) => {
    files.forEach(file => {
      filenames.push(file);
    })
    response.send(filenames);
  });
});

app.post("/file-data", jsonParser, function(request, response){
  console.log(request.body);
  if(!request.body) return false;
  let data = fs.readFileSync(`texts/${request.body.filename}`, 'utf-8');
  response.json(data);
});



// var contents = fs.readFileSync('111.txt', 'utf8');
// console.log(contents);


app.use(function(request, response, next){
  var now = new Date();
  var hour = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get("user-agent")}`;
  console.log(data);
  fs.appendFile("server.log", data + "\n");
  next();
});

app.listen(3000);

//  Лигим запросы

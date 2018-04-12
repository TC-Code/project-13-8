var http = require("http");
var fs = require("fs");
var server = http.createServer();

server.on("request", function(request, response) {
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  if (request.method === "GET" && request.url === "/") {
    fs.readFile("./index.html", function(error, data) {
      response.write(data);
      response.end();
    });
  } else {
    response.setHeader("Content-Type", "image/jpg");
    response.statusCode = 404;
    fs.readFile("./notfound.jpg", function(error, data) {
      response.write(data);
      response.end();
    });
  }
});

server.listen(8080);

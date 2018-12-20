const http = require("http");
const customers = [
  {
    id: 1,
    name: "John"
  },
  {
    id: 2,
    name: "Jonny"
  },
  {
    id: 3,
    name: "Janardan"
  }
];
//const request = new ClientRequest();
//const response = new ServerResponse();
const requestListener = function(request, response) {
  // request.on('data', (param) => {
  //     response.write('Welcome to node app ' + param);
  // response.end();
  // })
  const payload = JSON.stringify(customers);
  request.on('data', (param) => console.log(param));
  response.writeHead(200, {
      'Content-Type': 'application/json'
  });
  response.write(payload);
  //request.pipe(response);
  response.end();
};

const server = http.createServer(requestListener);

server.on("request", () => console.log("Request logged at : " + new Date()));

server.listen(8080, () => console.log("Server is ready"));

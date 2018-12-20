const http = require('http');

//const request = new ClientRequest();
//const response = new ServerResponse();
const requestListener = function (request, response) {
    // request.on('data', (param) => {
    //     response.write('Welcome to node app ' + param);
    // response.end();
    // })

    request.pipe(response);
    //response.end();
    
}

const server = http.createServer(requestListener);

server.on('request', () => console.log('Request logged at : ' + new Date()));

server.listen(8080, () => console.log('Server is ready'));
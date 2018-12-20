var http = require('http');
var fs = require('fs');

var idNumber = function() {
    this.id = 0;
    this.IdGenerator= ()=> {
        return this.id++;
    }
}
const id = new idNumber();
var server = http.createServer(function(request, response){
    response.writeHead(200);
    if(request.method === 'GET'){
        fs.createReadStream('filechooser.html').pipe(response);     
    }
    else if(request.method === 'POST'){
        var outputFile = fs.createWriteStream(`../assets/${'output' + id.IdGenerator() + new Date().toDateString()}.txt`);
        var total = request.headers['content-length'];
        var progress = 0;

        request.on('data', function(chunk){
            progress += chunk.length;
            var perc = parseInt((progress/total)*100);
            console.log('percent complete: '+perc+'%\n');
            response.write('percent complete: '+perc+'%\n');
        });

        request.pipe(outputFile);

        request.on('end', function(){
            response.end('\File Uploaded\n\n');
        });
    }

});

server.listen(8080, function(){
    console.log('Server is listening on 8080');
});
import http from 'http';

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Home Page");
        res.end();
    }
    else if (req.url === "/about") {
        res.write("About Page");
        res.end();
    }
    else if(req.url==="/data"&& req.method==="POST"){
        let body='';
        res.writeHead(200,{"content-type":"application/json"})
        res.end("data=",body)
    }
    else {
        res.write("Error: URL Not Found");
        res.end();
    }
});

server.listen(3001, () => {
    console.log("server is listening on port 3001");
});
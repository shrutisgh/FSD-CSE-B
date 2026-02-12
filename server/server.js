import http from 'http';
import os from 'os';

let data = [];   // ✅ Initialize as array

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url == "/" && req.method == "GET") {
        res.write("<h1>Home Page</h1>");
        res.end();
    }

    else if (url == "/about" && req.method == "GET") {
        res.write("<h1>About</h1>");
        res.end();
    }

    else if (url == "/contact" && req.method == "GET") {
        res.write("<h1>Contact</h1>");
        res.end();
    }

    else if (url == "/viewdata" && req.method == "GET") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));   // ✅ Convert to JSON
    }

    else if (url == "/system" && req.method == "GET") {
        const sysdata={
            platform:os.platform(),
            arch:os.arch(),
            cpu:os.cpus(),
            totalRam:os.totalmem(),
            freemem:os.freemem()
        }
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(sysdata));   // ✅ Convert to JSON
    }


    else if (url == "/senddata" && req.method == "POST") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            console.log(body, "data received");

            data.push(body);   // ✅ Store in array

            res.write("Data received: " + body);
            res.end();
        });

    }

    else {
        res.statusCode = 404;
        res.write("<h1>Page Not Found: 404</h1>");
        res.end();
    }
});

server.listen(4001, () => {
    console.log("server is running at port 4001");
});

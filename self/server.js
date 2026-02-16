// import http from "http";
// import os from "os";
// import fs from "fs";


// const userData = [];

// const server = http.createServer((req, res) => {

//     // Remove query params & trailing slash
//     const url = req.url.split("?")[0].replace(/\/$/, "");

//     // ================= HOME =================
//     if ((url === "" || url === "/") && req.method === "GET") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end("<h1>Home Page</h1>");
//     }

//     // ================= ABOUT =================
//     else if (url === "/about" && req.method === "GET") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end("<h1>About Page</h1>");
//     }

//     // ================= CONTACT =================
//     else if (url === "/contact" && req.method === "GET") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end("<h1>Contact Page</h1>");
//     }

//     // ================= VIEW DATA =================
//     else if (url === "/viewdata" && req.method === "GET") {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify(userData));
//     }

//     // ================= SYSTEM INFO =================
//     else if (url === "/system" && req.method === "GET") {

//         const sysdata = {
//             platform: os.platform(),
//             arch: os.arch(),
//             cpuCores: os.cpus().length,
//             totalRam: (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + " GB",
//             freeRam: (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + " GB",
//             uptime: (os.uptime() / 60).toFixed(2) + " minutes"
//         };

//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify(sysdata));
//     }

//     // ================= SEND DATA (POST) =================
//     else if (url === "/senddata" && req.method === "POST") {

//         let body = "";

//         req.on("data", chunk => {
//             body += chunk;
//         });

//         req.on("end", () => {
//             try {
//                 const parsedData = JSON.parse(body);

//                 // Store parsed object
//                 userData.push(parsedData);

//                 res.writeHead(200, { "Content-Type": "application/json" });
//                 res.end(JSON.stringify({
//                     message: "Data received successfully",
//                     allUsers: userData
//                 }));

//             } catch (error) {
//                 res.writeHead(400, { "Content-Type": "text/plain" });
//                 res.end("Invalid JSON format");
//             }
//         });
//     }

//     // ================= 404 =================
//     else {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         res.end("<h1>404 - Page Not Found</h1>");
//     }

// });

// server.listen(4001, () => {
//     console.log("🚀 Server is running at http://localhost:4001");
// });







import http from "http";
import os from "os";
import fs from "fs";

const server = http.createServer((req, res) => {

    // Remove query params & trailing slash
    const url = req.url.split("?")[0].replace(/\/$/, "");

    // ================= HOME =================
    if ((url === "" || url === "/") && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Home Page</h1>");
    }

    // ================= ABOUT =================
    else if (url === "/about" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About Page</h1>");
    }

    // ================= CONTACT =================
    else if (url === "/contact" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Contact Page</h1>");
    }

    // ================= VIEW DATA (READ FILE) =================
    else if (url === "/viewdata" && req.method === "GET") {

        fs.readFile("data.json", "utf8", (err, fileData) => {

            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                return res.end("Error reading file");
            }

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(fileData);
        });
    }

    // ================= SYSTEM INFO =================
    else if (url === "/system" && req.method === "GET") {

        const sysdata = {
            platform: os.platform(),
            arch: os.arch(),
            cpuCores: os.cpus().length,
            totalRam: (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + " GB",
            freeRam: (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + " GB",
            uptime: (os.uptime() / 60).toFixed(2) + " minutes"
        };

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(sysdata));
    }

    // ================= SEND DATA (WRITE FILE) =================
    else if (url === "/senddata" && req.method === "POST") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {

            try {
                const newData = JSON.parse(body);

                // Step 1: Read existing data
                fs.readFile("data.json", "utf8", (err, fileData) => {

                    if (err) {
                        res.writeHead(500);
                        return res.end("Error reading file");
                    }

                    const users = JSON.parse(fileData);

                    // Step 2: Add new data
                    users.push(newData);

                    // Step 3: Write updated data back to file
                    fs.writeFile(
                        "data.json",
                        JSON.stringify(users, null, 2),
                        (err) => {

                            if (err) {
                                res.writeHead(500);
                                return res.end("Error writing file");
                            }

                            res.writeHead(200, { "Content-Type": "application/json" });
                            res.end(JSON.stringify({
                                message: "Data stored successfully",
                                savedData: newData
                            }));
                        }
                    );
                });

            } catch (error) {
                res.writeHead(400, { "Content-Type": "text/plain" });
                res.end("Invalid JSON format");
            }
        });
    }

    // ================= 404 =================
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - Page Not Found</h1>");
    }

});

server.listen(4001, () => {
    console.log("🚀 Server running at http://localhost:4001");
});


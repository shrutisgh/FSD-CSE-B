const http = require("http");
const fs = require("fs");

const PORT = 5000;
const FILE_PATH = "./users.json";


if (!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, "[]");
}


const getUsers = () => {
    const data = fs.readFileSync(FILE_PATH, "utf-8");
    return JSON.parse(data || "[]");
};


const saveUsers = (users) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 2));
};

const server = http.createServer((req, res) => {

    if (req.method === "POST" && req.url === "/api/register") {

        let body = "";

        // Receive data
        req.on("data", chunk => {
            body += chunk.toString();
        });

       
        req.on("end", () => {

            console.log("BODY RECEIVED:", body); 

           
            if (!body) {
                res.writeHead(400, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({ message: "Empty body" }));
            }

           
            let data;
            try {
                data = JSON.parse(body);
            } catch (err) {
                res.writeHead(400, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({ message: "Invalid JSON format" }));
            }

            const { name, email, password } = data;

            
            if (!name || !email || !password) {
                res.writeHead(400, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({ message: "All fields required" }));
            }

          
            let users = getUsers();

           
            const exists = users.find(u => u.email === email);
            if (exists) {
                res.writeHead(400, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({ message: "User already exists" }));
            }

           
            const newUser = {
                id: Date.now(),
                name,
                email,
                password
            };

            users.push(newUser);
            saveUsers(users);

            
            res.writeHead(201, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "User registered successfully" }));
        });

    } else {
       
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});


server.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
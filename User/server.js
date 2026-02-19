// import http from "http";

// const users = [
//     { id: 1, name: "John Doe", email: "john@example.com" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com" },
//     { id: 3, name: "Alice Johnson", email: "alice@example.com" }
// ];

// const server = http.createServer((req, res) => {

//     const url = req.url;
//     const method = req.method;

//     // HOME
//     if (url === "/" && method === "GET") {
//         res.end("<h1>Home Page</h1>");
//     }

//     // GET ALL USERS
//     else if (url === "/users" && method === "GET") {
//         res.setHeader("Content-Type", "application/json");
//         res.end(JSON.stringify(users));
//     }

//     // GET USER BY ID
//     else if (url.startsWith("/users/") && method === "GET") {

//     const id = parseInt(url.split("/")[2]);

//     const user = users.find(u => u.id === id);

//     if (!user) {
//         res.statusCode = 404;
//         return res.end("User Not Found");
//     }

//     res.setHeader("Content-Type", "application/json");
//     res.end(JSON.stringify(user));
// }

//     // CREATE USER (dummy example)
//     else if (url === "/createusers" && method === "POST") {
//         res.statusCode = 201;
//         res.end("User Created");
//     }

//     // PUT
//     else if (url.startsWith("/users/") && method === "PUT") {
//         res.end("Edit User");
//     }

//     // DELETE
//     else if (url.startsWith("/users/") && method === "DELETE") {
//         const id=url.split("/")[2];
//         const userIdx=users.findIndex(u=>u.id===parseInt(id));
//         if(!userIdx){
//             res.statusCode=404;
//             return res.end("User Not Found");
//         }
//         users.splice(userIdx,1);
//         console.log(id," deleted");
//         res.end(id+"User Deleted");
//     }

//     else {
//         res.statusCode = 404;
//         res.end("<h1>404 - Page Not Found</h1>");
//     }

// });

// server.listen(4001, () => {
//     console.log("🚀 Server running at http://localhost:4001");
// });




import http from "http";

let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com" }
];

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    res.setHeader("Content-Type", "application/json");

    // ================= GET ALL USERS =================
    if (url === "/users" && method === "GET") {
        return res.end(JSON.stringify(users));
    }

    // ================= GET USER BY ID =================
    if (url.startsWith("/users/") && method === "GET") {

        const id = parseInt(url.split("/")[2]);
        const user = users.find(u => u.id === id);

        if (!user) {
            res.statusCode = 404;
            return res.end(JSON.stringify({ message: "User Not Found" }));
        }

        return res.end(JSON.stringify(user));
    }

    // ================= CREATE USER =================
    if (url === "/users" && method === "POST") {

        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const newUser = JSON.parse(body);

            newUser.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;

            users.push(newUser);

            res.statusCode = 201;
            res.end(JSON.stringify({
                message: "User Created",
                user: newUser
            }));
        });

        return;
    }

    // ================= UPDATE USER =================
    if (url.startsWith("/users/") && method === "PUT") {

        const id = parseInt(url.split("/")[2]);
        const userIndex = users.findIndex(u => u.id === id);

        if (userIndex === -1) {
            res.statusCode = 404;
            return res.end(JSON.stringify({ message: "User Not Found" }));
        }

        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const updatedData = JSON.parse(body);

            users[userIndex] = {
                ...users[userIndex],
                ...updatedData
            };

            res.end(JSON.stringify({
                message: "User Updated",
                user: users[userIndex]
            }));
        });

        return;
    }

    // ================= DELETE USER =================
    if (url.startsWith("/users/") && method === "DELETE") {

        const id = parseInt(url.split("/")[2]);
        const userIndex = users.findIndex(u => u.id === id);

        if (userIndex === -1) {
            res.statusCode = 404;
            return res.end(JSON.stringify({ message: "User Not Found" }));
        }

        const deletedUser = users.splice(userIndex, 1);

        res.end(JSON.stringify({
            message: "User Deleted",
            user: deletedUser[0]
        }));

        return;
    }

    // ================= 404 =================
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Route Not Found" }));

});

server.listen(4001, () => {
    console.log("🚀 Server running at http://localhost:4001");
});


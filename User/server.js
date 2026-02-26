import http from "http";
import { promises as fs } from "fs";

const PORT = 4001;
const DATA_FILE = "data.json";

// ================= READ USERS =================
async function readUsers() {
    try {
        const data = await fs.readFile(DATA_FILE, "utf-8");
        return JSON.parse(data);
    } catch (err) {
        return []; // If file doesn't exist
    }
}

// ================= WRITE USERS =================
async function writeUsers(users) {
    await fs.writeFile(DATA_FILE, JSON.stringify(users, null, 2));
}

const server = http.createServer(async (req, res) => {

    const url = req.url;
    const method = req.method;

    res.setHeader("Content-Type", "application/json");

    // ================= GET ALL USERS =================
    if (url === "/users" && method === "GET") {
        const users = await readUsers();
        return res.end(JSON.stringify(users));
    }

    // ================= GET USER BY ID =================
    if (url.startsWith("/users/") && method === "GET") {

        const id = parseInt(url.split("/")[2]);
        const users = await readUsers();

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
        req.on("data", chunk => body += chunk);

        req.on("end", async () => {

            const users = await readUsers();
            const newUser = JSON.parse(body);

            newUser.id = users.length > 0
                ? users[users.length - 1].id + 1
                : 1;

            newUser.name = newUser.name || "Unnamed User";
            newUser.email = newUser.email || "No Email";

            users.push(newUser);
            await writeUsers(users);

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
        let body = "";

        req.on("data", chunk => body += chunk);

        req.on("end", async () => {

            const users = await readUsers();
            const index = users.findIndex(u => u.id === id);

            if (index === -1) {
                res.statusCode = 404;
                return res.end(JSON.stringify({ message: "User Not Found" }));
            }

            const updatedData = JSON.parse(body);

            users[index] = {
                ...users[index],
                ...updatedData
            };

            await writeUsers(users);

            res.end(JSON.stringify({
                message: "User Updated",
                user: users[index]
            }));
        });

        return;
    }

    // ================= DELETE USER =================
    if (url.startsWith("/users/") && method === "DELETE") {

        const id = parseInt(url.split("/")[2]);
        const users = await readUsers();

        const index = users.findIndex(u => u.id === id);

        if (index === -1) {
            res.statusCode = 404;
            return res.end(JSON.stringify({ message: "User Not Found" }));
        }

        const deletedUser = users.splice(index, 1);

        await writeUsers(users);

        return res.end(JSON.stringify({
            message: "User Deleted",
            user: deletedUser[0]
        }));
    }

    // ================= 404 =================
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Route Not Found" }));

});

server.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
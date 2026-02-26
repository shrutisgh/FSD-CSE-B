import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "users.json");

export const readUsers = async () => {
    try {
        const data = await fs.readFile(filePath, "utf8");
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

export const writeUsers = async (users) => {
    await fs.writeFile(filePath, JSON.stringify(users, null, 2));
};
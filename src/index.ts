import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (request, response) => response.send("I'm alive!"));

app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`);
});
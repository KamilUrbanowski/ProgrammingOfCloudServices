const keys = require("./keys");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const { Pool } = require("pg");
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort,
});

pgClient.on("connect", (client) => {
    client.query("CREATE TABLE IF NOT EXISTS addedMessages (username TEXT, data TEXT)")
    .catch(err => console.log("PG ERROR", err));
});

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get("/messages/all", async (req, res) => {
    const values = await pgClient.query("SELECT * FROM addedMessages");
    res.send(values);
});

app.post("/messages", async (req, res) => {
    if (!req.body.value) res.send({ working: false });

    pgClient.query("INSERT INTO addedMessages(username, data) VALUES($1, $2)", [req.body.username, req.body.value]);

    res.send({ working: true });
});

app.listen(5000, (error) => {
    if (error) {
        console.error(error);
    }
    console.log("Listening");
});

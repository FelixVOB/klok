const { request } = require("express");
const express = require ("express");
const app = express();

app.use(express.static("../client/public"));
app.use(express.json());

app.get("/api/v1/time", (req, res) => {
    const now = new Date();
    let tijd = {
        "uren": now.getHours(),
        "minuten": now.getMinutes(),
        "seconden": now.getSeconds()
    }
    //res.status(401).send();
    res.json(tijd);
});

app.listen(3000, () => {
    console.log("Server is up and running!");
});
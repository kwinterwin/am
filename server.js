const express = require("express");
const body_parser = require("body-parser");
const app = express();
const fs = require("fs");
const port = 3000;

app.use(express.static(__dirname + "/project"));
app.use(express.static("./node_modules/angular"));

app.get("/data", getFileData);

function getFileData(req, res) {
    fs.readFile("./files/data.txt", "utf8", (error, data) => {
        res.send(data);
    });
}

app.listen(port, () => { console.log(`Server was connected on ${port} host...`) })
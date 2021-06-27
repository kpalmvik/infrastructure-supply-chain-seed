const temperature = require("./server/temperature");
const consumption = require("./server/consumption");

const express = require("express");
const apicache = require("apicache");
const app = express();
const cache = apicache.middleware;
const port = 3001;

app.get("/api/temperature", cache("5 minutes"), temperature);
app.get("/api/consumption", cache("60 minutes"), consumption);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

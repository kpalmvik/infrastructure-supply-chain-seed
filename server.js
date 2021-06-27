const temperature = require("./server/temperature");
const express = require("express");
const app = express();
const port = 3001;

app.get("/api/temperature", temperature);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

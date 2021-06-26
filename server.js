const express = require("express");
const app = express();
const port = 3001;

app.get("/api/hello", (req, res) => {
  res.json({ hello: "world" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

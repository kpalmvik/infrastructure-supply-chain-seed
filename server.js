const express = require("express");
const app = express();
const port = 3001;

const mockData = {
  average: 10,
  entries: [
    18.4, 18.4, 17.8, 17.4, 17.9, 18.1, 17.6, 18, 17.5, 17.2, 18.2, 20.1, 20.2,
    20.1, 19.9, 20.6, 21.5, 21.7, 21.7, 21.6, 21.1, 20.3, 19, 18,
  ],
};

app.get("/api/temperature", (req, res) => {
  res.json(mockData);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

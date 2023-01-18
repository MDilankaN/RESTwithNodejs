const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());

app.get("/data", (req, res) => {
  const colors = ["Black", "Red", "Pink", "Orange"];
  const shapes = ["Circle", "Triangle", "Square", "Rectangle"];

  res.json({
    color: _.sample(colors),
    shape: _.sample(shapes),
  });
});

app.post("/add", async (req, res) => {
  const id = uuid();
  const content = req.body.content;

  if (!content) {
    return res.status(400);
  }

  await fs.mkdir(`data/files/`, { recursive: true });
  await fs.writeFile(`data/files/${id}.txt`, content);

  res.sendStatus(201).json({
    id: id
  });
});

app.listen(3000, () => console.log("running"));

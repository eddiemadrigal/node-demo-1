const express = require("express");

const server = express();

let hubs = [
  {
    id: 1,
    name: "Eddie"
  }
];
// middleware
server.use(express.json()) // tells server to parse JSON from the body

// endpoints
server.get("/", (req, res) => {
  res.json({ api: "running ..."});
});

server.get("/api/hubs", (req, res) => {
  res.json(hubs);
});

server.get("/api/hubs/:id", (req, res) => {
  const id = req.params.id;
  const hub = hubs.find((hub) => hub.id == id);

  if (hub) {
    res.status(200).json(hub);
  } else {
    res.status(404).json({ message: "Hub not found" });
  }

});

server.post("/api/hubs", (req, res) => {
  const hubInfo = req.body;
  hubs.push(hubInfo);
  res.status(201).json(hubs);
});

const port = 5000;
server.listen(port, () => console.log(`\n=== Server is listening on port ${port}`));
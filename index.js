const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from my personal own Over Smart Pant");
});

const users = [
  { id: 1, name: "Sabana", email: "sabana@gmail.com", phone: "01752856578" },
  { id: 2, name: "Karana", email: "karana@gmail.com", phone: "01752856578" },
  {
    id: 3,
    name: "Shabnoora",
    email: "shabnoora@gmail.com",
    phone: "01752856578",
  },
  { id: 4, name: "Rina", email: "Rina@gmail.com", phone: "01752856578" },
  { id: 5, name: "Mousumi", email: "Mousumi@gmail.com", phone: "01752856578" },
  { id: 6, name: "Rajjak", email: "Rajjak@gmail.com", phone: "01752856578" },
  { id: 7, name: "Popi", email: "Popi@gmail.com", phone: "01752856578" },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((u) => u.name.toLowerCase().includes(search));
    res.send(matched);
  } else {
    res.send(users);
  }
});
app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("reequest", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "apple", "oranges"]);
});
app.get("/fruits/mango/fazle", (req, res) => {
  res.send("Fazle Flavor");
});

app.listen(port, () => {
  console.log("listing to port", port);
});

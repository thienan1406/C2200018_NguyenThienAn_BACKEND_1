const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const contactsRouter = require("./app/routes/contact.route");

app.get("/", (req, res) => {
  res.send("Welcome to Contact API");
});
app.use("/api/contacts", contactsRouter);

module.exports = app;

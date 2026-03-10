const express = require("express");
const path = require("path");
const sendMail = require("./services/smtp.service.js");
const cors=require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: ["https://thewebtab.com", "https://landingpage-node-b35sopjpz-professor0121s-projects.vercel.app"]
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/submit-form", async (req, res) => {
  await sendMail(req.body);

  res.sendFile(path.join(__dirname, "public", "submit.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
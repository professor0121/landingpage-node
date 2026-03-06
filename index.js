const express = require("express");
const path = require("path");
const sendMail=require("./services/smtp.service.js")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.post("/submit-form",async (req, res) => {
    await sendMail(req.body);
  res.sendFile(path.join(__dirname,"public","submit.html"))
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
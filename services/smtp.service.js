require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

const sendMail = async (data) => {

  const html = `
  <div style="font-family:Arial;padding:20px">
    <h2>New Form Submission</h2>

    <table border="1" cellpadding="10" cellspacing="0" style="border-collapse:collapse;width:100%">
      <tr>
        <th align="left">Name</th>
        <td>${data.name || ""}</td>
      </tr>

      <tr>
        <th align="left">Email</th>
        <td>${data.Email || ""}</td>
      </tr>

      <tr>
        <th align="left">Phone</th>
        <td>${data.Phone || ""}</td>
      </tr>

      <tr>
        <th align="left">Website</th>
        <td>${data["Website-URL"] || ""}</td>
      </tr>

      <tr>
        <th align="left">Revenue</th>
        <td>${data["revenue"] || ""}</td>
      </tr>

      <tr>
        <th align="left">What do you want ?</th>
        <td>${data["what-do-you-want"] || ""}</td>
      </tr>

  
      <tr>
        <th align="left">Reference</th>
        <td>${data["reference"] || ""}</td>
      </tr>
    </table>

    <p style="margin-top:20px;color:gray">
      This lead was submitted from the website form.
    </p>

  </div>
  `;

  try {
    const info = await transporter.sendMail({
      from: `"Website Form Resposne" ${process.env.SMTP_USER}`,
      to: process.env.SMTP_USER,
      subject: "New Website Lead",
      html
    });

    console.log("Email sent:", info.messageId);

  } catch (error) {
    console.error("Email error:", error);
  }
};

module.exports = sendMail;
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const validator = require("validator"); // <- added
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Stricter email validation
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  // Optional: check if name or message is empty
  if (!name.trim() || !message.trim()) {
    return res.status(400).json({ error: "Name and message cannot be empty" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // app password recommended
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "Portfolio Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send message. Please check server logs." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

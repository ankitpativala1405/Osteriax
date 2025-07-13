import nodemailer from "nodemailer";
import { Contact } from "../model/Contact.model.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

export const ContactController = {
  SendContactMail: async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      const contact = await Contact.create({
        name,
        email,
        subject,
        message,
      });

      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form: ${subject}`,
        text: `
New message from your website contact form:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
        `,
        html: `
          <div style="font-family: Arial; padding: 20px; max-width: 600px;">
            <h2>New Contact Form Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong><br/>${message}</p>
          </div>
        `,
      });

      res.json({
        success: true,
        message: "Message saved & email sent successfully!",
        data: contact,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  },
};

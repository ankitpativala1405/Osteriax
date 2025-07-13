import { BookTable } from "../model/BookTable.model.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("❌ Verify failed:", error);
  } else {
    console.log("✅ Server ready to send mail");
  }
});

export const BookTableController = {
  GetTableData: async (req, res) => {
    try {
      const books = await BookTable.find();
      res.status(200).json({
        success: true,
        books,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  },

  // PostTableData: async (req, res) => {
  //   try {
  //     const book = await BookTable.create(req.body);

  //     console.log("📩 Sending mail to:", req.body.email);

  //     const info = await transporter.sendMail({
  //       from: '"Test Mail" <pativalaankit@gmail.com>',
  //       to: req.body.email, 
  //       subject: "Reservation Confirmation",
  //       text: `Hello ${req.body.fullName},\n\nThank you for your reservation!\n\nDetails:\nDate: ${req.body.date}\nPeople: ${req.body.people}\n\nSee you soon!\n\n- For OsteriaX`,
  //     });

  //     console.log("✅ Mail sent:", info);

  //     res.status(201).json({
  //       success: true,
  //       message: "Reservation saved & email sent!",
  //       data: book,
  //     });
  //   } catch (err) {
  //     console.error("❌ Error:", err);
  //     res.status(400).json({
  //       success: false,
  //       error: err.message,
  //     });
  //   }
  // },


  PostTableData: async (req, res) => {
    try {
      const book = await BookTable.create(req.body);

      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #D2691E;">Hello ${req.body.fullName},</h2>
          <p>Thank you for your reservation at <strong>OsteriaX</strong>!</p>
          <p>Here are your reservation details:</p>
          <ul>
            <li><strong>Date:</strong> ${req.body.date}</li>
            <li><strong>Number of People:</strong> ${req.body.people}</li>
            <li><strong>Phone:</strong> ${req.body.phone}</li>
          </ul>
          <p>We look forward to serving you soon!</p>
          <p style="margin-top: 20px;">Best regards,<br/>The OsteriaX Team</p>
          <hr style="border: none; border-top: 1px solid #eee;"/>
          <p style="font-size: 12px; color: #888;">If you have any questions, feel free to contact us.</p>
        </div>
      `;

      await transporter.sendMail({
        from: `"OsteriaX" <${process.env.EMAIL_USER}>`,
        to: req.body.email,
        subject: "Your Reservation Confirmation at OsteriaX",
        text: `Hello ${req.body.fullName},

Thank you for your reservation at OsteriaX!

Details:
Date: ${req.body.date}
People: ${req.body.people}
Phone: ${req.body.phone}

We look forward to serving you soon!

- The OsteriaX Team`,
        html: htmlBody,
      });

      res.status(201).json({
        success: true,
        message: "Reservation saved & email sent!",
        data: book,
      });
    } catch (err) {
      console.error(err);
      res.status(400).json({
        success: false,
        error: err.message,
      });
    }
  },
  UpdateTableData: async (req, res) => {
    try {
      const book = await BookTable.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!book) {
        return res.status(404).json({
          success: false,
          error: "Booking Not Found",
        });
      }

      res.status(200).json({
        success: true,
        data: book,
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        error: err.message,
      });
    }
  },

  DeleteTableData: async (req, res) => {
    try {
      const book = await BookTable.findByIdAndDelete(req.params.id);

      if (!book) {
        return res.status(404).json({
          success: false,
          error: "Booking Not Found",
        });
      }

      res.status(200).json({
        success: true,
        data: {},
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  },
};

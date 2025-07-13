import { Router } from "express";
import { ContactController } from "../controller/Contact.controller.js";

const ContactRouter = Router();

ContactRouter.post("/", ContactController.SendContactMail);

export default ContactRouter;
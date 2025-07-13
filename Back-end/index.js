import express from 'express'
import dotenv from 'dotenv'
import BookTablerouter from './router/BookTable.router.js'
import cors from 'cors'
import DbConnect from './config/DbConnect.js'
import ContactRouter from './router/Contact.router.js'

dotenv.config({
  path: "./.env"
})

const app = express()
app.use(express.json());

app.use(cors())

app.use("/tabledata", BookTablerouter)
app.use("/contact", ContactRouter);


const PORT = process.env.PORT

app.listen(PORT, (err) => {

  if (!err) {
    console.log(`Server Start in Port --> ${PORT}`)
    DbConnect()
  } else {
    console.log(err);
  }
})
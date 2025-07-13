import { Router } from 'express'
import { BookTableController } from '../controller/BookTable.controller.js'

const BookTablerouter = Router()

BookTablerouter.get("/", BookTableController.GetTableData)
BookTablerouter.post("/", BookTableController.PostTableData)

BookTablerouter.patch("/:id", BookTableController.UpdateTableData)
BookTablerouter.delete("/:id", BookTableController.DeleteTableData)


export default BookTablerouter
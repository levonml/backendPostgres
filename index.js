import express from "express"

import { connectToDatabase } from "./utils/db.js"
import { PORT } from "./utils/config.js"
import { getAll, createOne } from "./controllers/people.js"

const app = express()

app.get("/api/people", getAll)
app.post("/api/people", createOne)
const start = async () => {
	await connectToDatabase()
	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`)
	})
}
start()

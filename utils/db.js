import { DATABASE_URL } from "./config.js"
import { Sequelize } from "sequelize"

export const sequelize = new Sequelize(DATABASE_URL)

export const connectToDatabase = async () => {
	try {
		await sequelize.authenticate()
		console.log("Connection has been established successfully.")
	} catch (err) {
		console.log("err from sequelize.authenticate()", err)
		return process.exit(1)
	}
	return null
}

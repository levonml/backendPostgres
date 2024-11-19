import dontenv from "dotenv"

dontenv.config()

export const DATABASE_URL = process.env.DATABASE_URL
export const PORT = process.env.PORT || 3001

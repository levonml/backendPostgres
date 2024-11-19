import Person from "../models/index.js"

export const getAll = async (req, res) => {
	const people = await Person.findAll()
	res.json(people)
}

export const createOne = async (req, res) => {
	const person = {
		name: "Asatur Suqiasyan",
		number: "6-22-55",
	}
	const people = await Person.create(person)
	console.log("after create", JSON.stringify(people, null, 2))
	res.json(people)
}

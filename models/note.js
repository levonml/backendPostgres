import { Model, DataTypes } from "sequelize"
import { sequelize } from "../utils/db.js"

class Person extends Model {}

Person.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		number: {
			type: DataTypes.TEXT,
		},
		date: {
			type: DataTypes.DATE,
		},
	},
	{
		sequelize,
		underscored: true,
		timestamps: false,
		modelName: "person",
	}
)
export default Person

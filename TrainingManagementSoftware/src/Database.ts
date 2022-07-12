import { AppDataSource } from "./data-source"
import { Employee } from "./entity/Employee"

const AddEmployee = AppDataSource.initialize().then(async () => {

    try {
    console.log("Inserting a new user into the database...")
    const employee = new Employee()
    employee.Trainee_First_Name = "David"
    employee.Trainee_Last_Name = "Magic"
    employee.Trainee_Home_Address = "5155 Mallards Landing Drive"
    await AppDataSource.manager.save(employee)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(Employee)
    console.log("Loaded users: ", Employee)

    console.log("Here you can setup and run express / fastify / any other framework.")
    } catch (error) {
        error => console.log(error)
    }
})

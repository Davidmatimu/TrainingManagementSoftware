import express from "express"
import { Employee } from "../entity/Employee";

const router = express.Router();

router.post('/api/client', (req,res) => {
    res.send('hello')

    const{
        Trainee_First_Name,
        Trainee_Last_Name,
        Trainee_Home_Address,
        Trainee_Home_Telephone,
    } = req.body;

});

export{
    router as EmployeeRouter
}
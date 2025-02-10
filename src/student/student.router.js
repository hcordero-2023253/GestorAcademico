import { Router } from "express";
import { verCurso, editStudent, deleteStudent} from "../student/student.controller.js";
import { validateJwt } from "../../middlewares/validate.jwt.js";
const student = Router();

student.get('/viewCourse', validateJwt, verCurso)
student.put('/updateStudent/:id', validateJwt, editStudent)
student.delete('/deleteStudent/:id', validateJwt, deleteStudent)

export default student;
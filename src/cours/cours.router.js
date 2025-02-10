import { Router } from "express";
import { addStudentAsignature, createAsignature, deleteStudentFromAsignature, getAsignaturesByStudent, getAsignaturesByTeacher, updateAsignature } from "./cours.controller.js";
import { validateJwt } from "../../middlewares/validate.jwt.js";

const apiAsignatures = Router()

apiAsignatures.get('/getAsignaturesByStudent/:id_student',getAsignaturesByStudent)//Id del estudiante
apiAsignatures.get('/getAsignaturesByTeacher/:id_teacher',getAsignaturesByTeacher)//Id del prasignature

apiAsignatures.post('/asignatures',validateJwt, createAsignature)
apiAsignatures.put('/editAsignature/:id_asignature',validateJwt,updateAsignature)//Id de la asignatura
apiAsignatures.put('/addStudentAsignature/:id_asignature',validateJwt,addStudentAsignature)//Id de la asignatura
apiAsignatures.delete('/deleteAsignature/:id_asignature',validateJwt,deleteStudentFromAsignature)//Id de la asignatura

export default apiAsignatures
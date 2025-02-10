import { Router } from "express";
import { createPerson, getPersonTest } from "./person.controller.js";
import { validateJwt } from "../../middlewares/validate.jwt.js";

const apiPerson = Router()

apiPerson.get('/',getPersonTest)
apiPerson.post('/registerPerson',validateJwt,createPerson)
export default apiPerson
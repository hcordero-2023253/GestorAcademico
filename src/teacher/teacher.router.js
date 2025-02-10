import { Router } from "express";
import { createTeacher } from "./teacher.controller.js";
import { validateJwt } from "../../middlewares/validate.jwt.js";

const apiTeacher = Router();

apiTeacher.post("/teacher",validateJwt,createTeacher)

export default apiTeacher
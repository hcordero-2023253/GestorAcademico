import { Router } from "express";
import { verCurso,
         agregarCurso
         } from "../cours/cours.controller.js";

const cours = Router();

cours.get('/cours', verCurso);
cours.post('/newCours', agregarCurso);

export default cours;
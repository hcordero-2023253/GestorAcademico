'use strict';

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import authRoutes from '../src/auth/auth.routes.js';
import coursRoutes from "../src/cours/cours.router.js";
import studentRouter from "../src/student/student.router.js";
import teacherRouter from "../src/teacher/teacher.router.js";
import { limiter } from '../middlewares/rate.limit.js';


const configs = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    app.use(helmet());
    app.use(morgan('dev'));
    app.use(limiter)
}

const routes = (app) => {
    app.use(authRoutes)
    app.use(coursRoutes)
    app.use(studentRouter)
    app.use(teacherRouter)
}

export const initServer = ()=>{
    const app = express();
    try {
        configs(app);
        routes(app);
        app.listen(process.env.PORT)
        console.log(`Servidor iniciado en el puerto ${process.env.PORT}`)
    } catch (error) {
        console.log('Server init failed', error);
        
    }
}
import { Router} from 'express';
import { test,
        register,
        login        } from './auth.controller.js';
import { validateRegisterEstudent, validateRegisterTeacher } from '../../middlewares/validators.js';

const api = Router();

api.get('/users', test);
api.post('/register',[validateRegisterEstudent, validateRegisterTeacher], register);
api.post('/login', login);

export default api;
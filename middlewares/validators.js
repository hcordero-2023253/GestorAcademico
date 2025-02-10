import {body} from 'express-validator';
import { validateErrors, validateErrorsFile } from './validate.errors.js';
import { existUsernameEstudent, existEmailEstudent, existUsernameTeacher, existEmailTeacher, notRequiredField} from '../utils/db.validator.js';

/*Estudent validation*/
export const validateRegisterEstudent = [
    body('name', 'Name cannot be empty').notEmpty(),
    body('surname', 'Surname cannot be empty').notEmpty(),
    body('email', 'Invalid email').isEmail().notEmpty().custom(existEmailEstudent),
    body('username', 'Username cannot be empty').notEmpty().custom(existUsernameEstudent),
    body('password', 'Password cannot be empty').notEmpty().isStrongPassword().withMessage('The password must be strong').isLength({min: 8}),
    validateErrors
]

/*Teacher validation */
export const validateRegisterTeacher = [
    body('name', 'Name cannot be empty').notEmpty(),
    body('surname', 'Surname cannot be empty').notEmpty(),
    body('email', 'Invalid email').isEmail().notEmpty().custom(existUsernameTeacher),
    body('username', 'Username cannot be empty').notEmpty().custom(existEmailTeacher),
    body('password', 'Password cannot be empty').notEmpty().isStrongPassword().withMessage('The password must be strong').isLength({min: 8}),
    validateErrors
]

/*Update validation */
export const validateUpdate= [
    //Update estudent
    body('username', 'Username cannot be empty').optional().notEmpty().toLowerCase().custom((username, {req}) => existUsernameEstudent(username, req.student)),
    body('email', 'Invalid email').optional().isEmail().custom((email, {req}) => existEmailEstudent(email, req.student)),
    body('password', 'Password cannot be empty').optional().notEmpty().custom(notRequiredField),   
    //Update teacher
    body('username', 'Username cannot be empty').optional().notEmpty().toLowerCase().custom((username, {req}) => existUsernameTeacher(username, req.teacher)),
    body('email', 'Invalid email').optional().isEmail().custom((email, {req}) => existEmailTeacher(email, req.teacher)),
    body('password', 'Password cannot be empty').optional().notEmpty().custom(notRequiredField),
    validateErrorsFile
]
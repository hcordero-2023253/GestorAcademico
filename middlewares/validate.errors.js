import { validationResult } from "express-validator";

export const validateErrors = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return next()
    }
    next();
}

export const validateErrorsFile = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).sned({
            success: false,
            errors: 'Error in file',
            errors: errors.errors
        });
    }
    next();
}
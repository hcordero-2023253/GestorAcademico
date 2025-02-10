'use strict';   

import jwt from 'jsonwebtoken';

export const validateJwt = async (req, res, next) => {
    try {
        let secretKey = process.env.SECRET_KEY;
        let {authorization} = req.headers;
        if(!authorization) return res.status(401).send({
            success: false,
            message: 'Unauthorized'
        });
        let student = jwt.verify(authorization, secretKey);
        req.student = student;
        let teacher = jwt.verify(authorization, secretKey);
        req.teacher = teacher;
        next();

    } catch (error) {
        console.error(error);
        return res.status(401).send({
            success: false,
            message: 'Invalid credentials'
        })
    }
}
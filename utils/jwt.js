'use strict';

import jwt from 'jsonwebtoken';

export const generateJwt = (payload) => {
    try{
        return jwt.sign(
            payload,
            process.env.SECRET_KEY,{
                expiresIn: '2h',
                algorithm: 'HS256'
            }
        )
    }catch(error){
        console.log('generateJWT error', error);
    }
}
import Joi from 'joi';


export const userValidator = Joi.object({
    username: Joi.string().pattern(/^[a-zA-Z0-9]([a-zA-Z0-9_-]){1,14}[a-zA-Z0-9]$/).required().messages({
        "string.pattern.base": "wrong username"
    }),
    password: Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/).required().messages({
        "string.pattern.base": "wrong password"
    }),
    age: Joi.number().min(0).max(200).messages({
        "number.min": "age must be greater than 0",
        "number.max": "age must be lower than 200",

    })
})
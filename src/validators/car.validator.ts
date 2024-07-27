import Joi from 'joi';

export const carValidator = Joi.object({
    brand: Joi.string()
        .pattern(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄҐґ]{1,20}$/)
        .max(20)
        .min(1)
        .required(),
    price: Joi.number()
        .integer()
        .max(1000000)
        .min(0)
        .required(),
    year: Joi.number()
        .integer()
        .max(2024)
        .min(1990)
        .required()
})
import Joi from 'joi';

export const userValidator = Joi.object({
    name: Joi.string().pattern(/^[a-zA-Z\s]+$/).required().messages({
        'string.pattern.base': 'Name can only contain letters and spaces',
    }),
    username: Joi.string().pattern(/^[a-zA-Z0-9_]+$/).required().messages({
        'string.pattern.base': 'Username can only contain letters, numbers, and underscores',
    }),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    address: Joi.object({
        street: Joi.string().required(),
        suite: Joi.string().required(),
        city: Joi.string().required(),
        zipcode: Joi.string().required(),
        geo: Joi.object({
            lat: Joi.string().required(),
            lng: Joi.string().required(),
        }).required(),
    }).required(),
    phone: Joi.string().pattern(/^\(\d{3}\) \d{3}-\d{4}$/).required().messages({
        'string.pattern.base': 'Phone number must be in the format (123) 456-7890',
    }),
    website: Joi.string().uri().required(),
    company: Joi.object({
        name: Joi.string().required(),
        catchPhrase: Joi.string().required(),
        bs: Joi.string().required(),
    }).required(),
});
import Joi from 'joi';

export const postValidator = Joi.object({
    userId: Joi.number().required(),
    title: Joi.string().required(),
    body: Joi.string().required(),
});
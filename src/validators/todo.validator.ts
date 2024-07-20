import Joi from 'joi';

export const todoValidator = Joi.object({
    userId: Joi.number().required(),
    title: Joi.string().required(),
    completed: Joi.boolean().required(),
});
import Joi from 'joi';

export const albumValidator = Joi.object({
    userId: Joi.number().required(),
    title: Joi.string().required(),
});
import Joi from 'joi';

export const commentValidator = Joi.object({
    postId: Joi.number().required(),
    name: Joi.string().required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    body: Joi.string().required(),
});
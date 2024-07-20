import Joi from 'joi';

export const photoValidator = Joi.object({
    albumId: Joi.number().required(),
    title: Joi.string().required(),
    url: Joi.string().uri().required(),
    thumbnailUrl: Joi.string().uri().required(),
});
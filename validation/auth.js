import Joi from "joi";

export const registrationSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(10).max(100).required(),
    role: Joi.string().valid("house_owner", "artisan", "admin"),
});


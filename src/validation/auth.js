import Joi from "joi";

const registerValidationSchema = Joi.object({
  firstName: Joi.string().required().messages({
    "string.base": "First Name must be a text",
    "string.empty": "First Name cannot be empty",
    "any.required": "First Name is required",
  }),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(10)
    .max(100)
    .required()
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{10,100}$")),
  confirmPassword: Joi.any().valid(Joi.ref("password")).messages({
    "any.only": "Passwords do not match",
  }),
  role: Joi.string()
    .valid("house_owner", "artisan", "admin")
    .default("house_owner")
    .messages({
      "any.only": "Role must be either house_owner, Artisan or Admin",
    }),
});

export { registerValidationSchema };

const profileValidationSchema = Joi.object({
  professional_headline: Joi.string().required().messages({
    "string.base": "Professional Headline must be a text",
    "string.empty": "Professional Headline cannot be empty",
    "any.required": "professional Headline is required",
  }),
  profession: Joi.string()
    .required()
    .valid(
      "Carpenter",
      "Plumber",
      "Welder",
      "Brick Layer",
      "Electrician",
      "Auto Mechanic",
      "Painter",
      "Others",
    ).messages({
      "any.only": "Profession must be one of the following: Carpenter, Plumber, Welder, Brick Layer, Electrician, Auto Mechanic, Painter, Others",
    }),
    experience_years: Joi.number().required().messages({
      "number.base": "Exper"
    })
    
});

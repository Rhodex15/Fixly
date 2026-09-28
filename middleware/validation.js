import { registerValidationSchema } from "../src/validation/auth.js";

export const validateRegister = (req, res, next) => {
  const { error } = registerValidationSchema.validate(req.body);
  console.log(error)

  if (error) {
    return res.status(400).json({
      message: error.details[0].message
    });
  }

  next();
};

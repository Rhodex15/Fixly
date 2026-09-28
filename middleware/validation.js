<<<<<<< HEAD
import { registrationSchema } from "../validation/auth";

export const validateRegistration = (req, res, next) => {
    const {error} = registrationSchema.validate(req.body);
    if (error) {
        return res.status(400).json(
            {
                message: error.details[0].message,
            });
        }
    next();
};


=======
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
>>>>>>> 598653e960e22145d871c41136aac04bb842e4b7

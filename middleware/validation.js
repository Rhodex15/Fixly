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



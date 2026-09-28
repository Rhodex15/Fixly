import express from "express";
import { register } from "../controllers/auth/register.js";
<<<<<<< HEAD
import { profile } from "../controllers/auth/profile.js";
import { validateRegistration } from "../../middleware/validation.js";
=======
import { validateRegister } from "../../middleware/validation.js";

>>>>>>> 598653e960e22145d871c41136aac04bb842e4b7
//create or initialize an instance of express router
const router = express.Router()

//register endpoint
<<<<<<< HEAD
router.post("/register", register),
router.post("/register", validateRegistration, register),
router.post("/profile", profile),
=======
router.post("/register", validateRegister, register)

>>>>>>> 598653e960e22145d871c41136aac04bb842e4b7

export default router
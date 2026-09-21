import express from "express";
import { register } from "../controllers/auth/register.js";
import { profile } from "../controllers/auth/profile.js";
//create or initialize an instance of express router
const router = express.Router()

//register endpoint
router.post("/register", register)
router.post("/profile", profile)

export default router
import express from "express"
import { createProfile } from "../controllers/artisan/profile.js"
import { updateProfile } from "../controllers/artisan/updateProfile.js"

const router = express.Router()

router.post("/profile", createProfile)
router.put("/profile/:id", updateProfile)

export default router
import express from "express";
import { fetchUsers } from "../controllers/admin/getUsers.js";
import { fetchUser } from "../controllers/admin/getUser.js";

const router = express.Router()

router.get("/users", fetchUsers)
router.get("/user/:id", fetchUser)


export default router

import express from "express";
import { fetchUsers } from "../controllers/admin/getUsers.js";

const router = express.Router()

router.get("/users", fetchUsers)

export default router
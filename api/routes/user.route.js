import express from "express";
const router = express.Router();
import { test } from "../controllers/user.controller.js";
import {
  deleteUser,
  getUser,
  getUsers,
  signout,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

router.get("/test", test);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signout);
router.get("/getusers", verifyToken, getUsers);
router.get("/:userId", getUser);

export default router;

import express from "express";
import { dislike, getUser, like, remove, subscribe, unsubscribe, update } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// Update user
router.put("/:id", verifyToken, update);

// Delete user
router.delete("/:id", verifyToken, remove)

// Get user
router.get("/find/:id", getUser)

// Subscribe user
router.put("/subscribe/:id", verifyToken, subscribe)

// Unsubscribe user
router.put("/unsubscribe/:id", verifyToken, unsubscribe)

// Like video
router.put("/like/:videoId", verifyToken, like)

// Dislike video
router.put("/dislike/:videoId", verifyToken, dislike)

export default router;
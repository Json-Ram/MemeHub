import express from "express";
import { addVideo, deleteVideo, getVideo, updateVideo } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// Create video
router.post("/", verifyToken, addVideo);

// Update video
router.put("/:id", verifyToken, updateVideo);

// Delete video
router.delete("/:id", verifyToken, deleteVideo);

// Find video
router.get("/find/:id", getVideo);


export default router;
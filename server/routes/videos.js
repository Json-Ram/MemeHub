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

// Views of video
router.put("/views/:id", getVideo);

// Trending videos
router.get("/trending", getVideo);

// Random videos
router.get("/random", getVideo);

// Subcribed to videos
router.get("/subscribed", getVideo);


export default router;
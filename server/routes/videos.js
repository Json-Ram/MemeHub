import express from "express";
import { addVideo, addView, deleteVideo, getVideo, randomVideo, subscribedVideo, trendingVideo, updateVideo } from "../controllers/video.js";
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
router.put("/views/:id", addView);

// Trending videos
router.get("/trending", trendingVideo);

// Random videos
router.get("/random", randomVideo);

// Subcribed to videos
router.get("/subscribed", verifyToken, subscribedVideo);


export default router;
import express from "express";
import { signup, signin} from "../controllers/auth.js";

const router = express.Router();

// Creates user
router.post("/signup", signup)

// Login
router.post("/signin", signin)

// Login with Google Auth
router.post("/google", )



export default router;
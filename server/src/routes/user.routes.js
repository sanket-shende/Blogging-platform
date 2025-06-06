import { Router } from "express";
import {
	loginUser,
	logoutUser,
	registerUser,
	refreshAccessToken,
    changeCurrentPassword, 
    getCurrentUser,
    verifyEmail
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router();

router.route("/register").post(registerUser);
router.route("/verify-email").post(verifyEmail);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT,  logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT, changeCurrentPassword)
router.route("/current-user").get(verifyJWT, getCurrentUser)

export default router
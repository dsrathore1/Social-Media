import { Router } from "express";
import { sendMessage } from "../Controllers/message-controllers.js";
import protectRoute from "../Controllers/Middleware/protectRoute.js";

const messageRoutes = Router();

messageRoutes.get("/send/:id", protectRoute, sendMessage);

export default messageRoutes;

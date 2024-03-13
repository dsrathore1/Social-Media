import { Router } from "express";
import { mainPage, sharePost } from "../Controllers/controller.js";

const routes = Router();

routes.get("/", mainPage);
routes.post("/sharePost", sharePost);

export default routes;

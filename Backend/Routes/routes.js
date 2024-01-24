import { Router } from "express";
import { mainPage } from "../Controllers/controller.js";

const routes = Router();


routes.get("/", mainPage);

export default routes;
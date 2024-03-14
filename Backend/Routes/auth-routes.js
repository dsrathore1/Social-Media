import { Router } from "express";
import {
  deleteAllUser,
  deleteOneUser,
  getAllUsers,
  login,
  logout,
  signUp,
} from "../Controllers/auth-controllers.js";

const authRoutes = Router();

authRoutes.get("/getAllUsers", getAllUsers);

authRoutes.post("/signUp", signUp);

authRoutes.delete("/delete/:id", deleteOneUser);

authRoutes.delete("/deleteAll", deleteAllUser);

authRoutes.post("/login", login);

authRoutes.get("/logout", logout);

export default authRoutes;

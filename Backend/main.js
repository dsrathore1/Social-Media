import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./Routes/routes.js";
import authRoutes from "./Routes/auth-routes.js";
import messageRoutes from "./Routes/message-routes.js";
import connectDB from "./Database/connectDB.js";

import cookieParser from "cookie-parser";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 4002;

const app = express();

app.set("views", "Template");
app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(routes);
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Your site url is http://localhost:${PORT} `);
});

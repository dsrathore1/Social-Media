import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./Routes/routes.js";
import authRoutes from "./Routes/auth-routes.js";
import connectDB from "./Database/connectDB.js";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 4002;

const app = express();

app.set("views", "Template");
app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Your site url is http://localhost:${PORT} `);
});

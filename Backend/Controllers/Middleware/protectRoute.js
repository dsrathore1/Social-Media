import jwt from "jsonwebtoken";
import UserModel from "../../Database/Models/userData";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return req
        .status(401)
        .json({ error: "Unauthorized - No token provided" });
    }

    const decode = jwt.decode(token, process.env.JWT_SECRET_KEY);

    if (!decode) {
      return req.status(401).json({ error: "Unauthorized - Invalid Token" });
    }

    const user = await UserModel.findById(decode.userId);

    if (!user) {
      return req.status(401).json({ error: "Unauthorized - User not found" });
    }

    req.user = user;

    next();
  } catch (error) {
    if (error) throw error;
  }
};

export default protectRoute;

import UserModel from "../Database/Models/userData.js";
import bcrypt from "bcrypt";
import generateTokenAndSetCookie from "../Utils/generateToken.js";

export const signUp = async (req, res) => {
  const { fullName, email, pwd, cPwd, gender, userName } = req.body;

  //! CHECK BEFORE SIGNUPs
  if (pwd != cPwd) {
    return res.status(402).json({ error: "Password doesn't match" });
  }

  const user = await UserModel.findOne({ userName: userName });

  if (user) {
    return res.status(404).json({ error: "Username is already exists" });
  }

  //! HASH PASSWORD HERE

  let salt = await bcrypt.genSalt(10);
  const hashPwd = await bcrypt.hash(pwd, salt);

  //! PROFILE PICTURE GENERATOR
  const profilePicture = `https://avatar.iran.liara.run/public/${gender}?username=${userName}`;

  try {
    //! CREATE NEW USER
    const newUser = await UserModel({
      userName,
      fullName,
      email,
      pwd: hashPwd,
      gender,
      profilePic: profilePicture,
    });

    //! GENERATE JWT TOKEN
    generateTokenAndSetCookie(newUser._id, res);

    if (newUser) {
      await newUser.save();
      res.status(201).json({
        message: "Your user is successfully added",
        data: newUser,
      });
    } else {
      res.status(404).json({
        message: "Invalid user data input please check it again",
        error: error.message,
      });
    }
  } catch (error) {
    if (error) throw error.message;
    res.status(404).json({ error: "Interval server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, pwd } = req.body;

    const user = await UserModel.findOne({ userName });

    // console.log(userName, pwd);

    const isPwdCorrect = await bcrypt.compare(pwd, user?.pwd || "");

    if (!user || !isPwdCorrect) {
      return res.status(404).json({ message: "Invalid Username or Password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      message: "Your user data",
      data: user,
    });
  } catch (error) {
    if (error) throw error.message;
    res.status(500).json("Internal server error");
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json("Logout Successfully!");
  } catch (error) {
    if (error) throw error.message;
    res.status(500).json("Internal server error");
  }
};

export const getAllUsers = async (req, res) => {
  const allUsers = await UserModel.find({});
  return res.status(200).json({ message: "All your users", users: allUsers });
};

export const deleteOneUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  const deleteUser = await UserModel.deleteOne({ _id: id });
  return res
    .status(202)
    .json({ message: "Deleted Successfully!", deletedUser: deleteUser });
};

export const deleteAllUser = async (req, res) => {
  const deleteAllUsers = await UserModel.deleteMany();
  return res
    .status(204)
    .json({ message: "Deleted all user successfully!", deleteAllUsers });
};

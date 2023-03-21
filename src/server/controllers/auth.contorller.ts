import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { User } from "../modules/user.module";
import config from "config";

interface LoginInput {
  email: string;
  password: string;
}

class AuthController {
  static login = async (user: LoginInput) => {
    if (!user.email && !user.password) {
      return { msg: "Please provied and email and password" };
    }

    //Check if user exist in db
    const existUser = await User.findOne({
      email: user.email,
    });

    if (existUser) {
      //compare the passwords.
      bcrypt.compare(user.password, existUser.password);
      //Sing JWT, valid for 1 hour
      const token = jwt.sign(
        { userId: existUser.id, username: user.email },
        config.get("JWT_SECRET"),
        { expiresIn: "1h" }
      );

      return token;
    }
    return {msg: "User doesn't exist"};
  };
}
export default AuthController;

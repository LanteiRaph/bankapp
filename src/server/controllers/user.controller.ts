import { Request, Response } from "express";
import { hashPassword, validate } from "../helpers";

import { User } from "../modules/user.module";

export interface User {
  name: string;
  email: string;
  password: string;
}

class UserController {
  //Get all avaible users
  static listAll = async () => {
    //Get users from database
    const users = await User.find();
    //Send the users object
    return users;
  };

  //Find the user with the gevn id.
  static getOneById = async (userId: string) => {
    try {
      const user = await User.findById(userId);
      return user;
    } catch (error) {
      throw new Error("We Could'not find the user");
    }
  };

  //
  static create = async (user: User) => {
    //Validade if the parameters are ok
    const { errors } = validate(user);
    //Check for errors
    if (errors.length > 0) {
      return errors;
    }
    //has hash paword
    const hashedPassword = await hashPassword(user.password);
    //Save the new user.
    try {
      const newUser = new User({ ...user, password: hashedPassword });
      newUser.save();
      return newUser;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  //Update the give user resource.
  static editUser = async (userId: string, user: User) => {
    //Validate user inputs.
    const { errors } = validate(user);
    if (errors.length > 0) {
      return errors;
    }
    try {
      //return the new resource.
      const updatedUser = User.findByIdAndUpdate(userId, user);
      return updatedUser;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  static deleteUser = async (userId: string) => {
    //Get the ID from the url
    try {
        //return the new resource.
        const updatedUser = User.findByIdAndDelete(userId);
        return updatedUser;
      } catch (error) {
        throw new Error(error.message);
      }
  };
}

export default UserController;

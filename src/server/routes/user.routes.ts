import { Router, Request, Response } from "express";
import UserController from "../controllers/user.controller";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

const router = Router();

//Get all users
router.get("/", [checkJwt, checkRole(["ADMIN"])], UserController.listAll);

// Get one user
router.get(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  UserController.getOneById
);

//Create a new user
router.post("/", [checkJwt, checkRole(["ADMIN"])],async (req: Request, res: Response) =>  {
    const user = req.body
    try {
        const newUser =  await UserController.create(user);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json(error)
    }
});

//Edit one user
router.patch(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  UserController.editUser
);

//Delete one user
router.delete(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  UserController.deleteUser
);

export default router;
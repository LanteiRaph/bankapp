import { NextFunction, Request, Response } from "express";


export const AuthGuard = (req: Request, res: Response, next: NextFunction) => {
    console.log('Ready to do authentication');
    //Check if current user is authenticated.
    const header = req.headers
    if(!header.authorization) {
        return res.status(401).send({
            msg:"You have to login in to acceess your account"
        })
    }
    next()
}
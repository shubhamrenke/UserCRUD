import { NextFunction, Request, Response } from "express";
import User from "../models/user";

const getUser = (req :Request, res: Response) => {
    User.find()
    .select('-password')
    .exec()
    .then((users) => {
        return res.status(200).json({
            users,
            count: users.length
        });
    }).catch((error) => {
        return res.status(500).json({
            mesage : error.message,
            error
        })
    })
}

export default { getUser }
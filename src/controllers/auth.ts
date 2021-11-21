import { Request, Response } from "express";
import bcryptjs from 'bcryptjs'
import  mongoose  from "mongoose";
import User from "../models/user";
import signJWT from "../functions/signJWT";


const validateToken = (req :Request, res: Response) => {
    return res.status(200).json({
        message : 'Authorized User'
    })
}

const login = async (req :Request, res: Response) => {
    let { email , password } = req.body;

    User.find({email})
    .exec()
    .then(users => {
        if(users.length !== 1) {
            return res.json({
                message : 'This user is not register'
            })
        }
    bcryptjs.compare(password, users[0].password, (error, result) => {
            if(error) {
                return res.json({
                message : 'Invalid password'
            })
            } else if(result) {
                signJWT(users[0], (err, token) => {
                    if(err) {
                    return res.status(401).json({
                    message : 'Unauthorized user',
                    error: err
                    })
                    } else {
                        return res.status(200).json({
                            message: 'Login Successful',
                            token,
                            user : users[0]
                        })
                    }
                })
            }
        })
    }).catch((error) => {
         return res.status(500).json({
                message : error.message,
                error
            })
    })
}

const register = async (req :Request, res: Response) => {
    let { initials, firstName, middleName, lastName, mobile, email , password } = req.body

    const existingUser = await User.findOne({email : email});
    if(existingUser) {
        return res.status(400).json({
            message : 'Allready email used'
        })
    } else {
         bcryptjs.hash(password,10,(hashError, hash) => {
        if(hashError) {
            return res.status(500).json({
             message : hashError.message,
             error : hashError   
            })
        }
     const _user = new User({
        _id : new mongoose.Types.ObjectId(),
        initials,
        firstName,
        middleName,
        lastName,
        mobile,
        email,
        password : hash
    })

    return _user.save()
    .then((user) => {
        return res.status(201).json({
            message : 'User register sucessfully',
            user
        })
    })
    .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error
        })
    })
    })

    }

   
   

}

export default { register, validateToken, login}
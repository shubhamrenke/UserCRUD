import {Document} from 'mongoose'

export interface ILogin { 
    email : string 
    password : string
}

export interface IUser extends Document{
    initials : string
    firstName : string
    middleName : string 
    lastName : string 
    mobile : string 
    email : string 
    password : string
}
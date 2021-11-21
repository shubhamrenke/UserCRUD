import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/auth";

const UserSchema: Schema = new Schema({
    initials : {type : String, required : true},
    firstName : {type : String, required : true},
    middleName :{type : String, required : true},
    lastName : {type : String, required : true}, 
    mobile : {type : String, required : true}, 
    email :{type : String, required : true},
    password : {type : String, required : true}
}, {
    timestamps : true
});

export default mongoose.model<IUser>('user', UserSchema)

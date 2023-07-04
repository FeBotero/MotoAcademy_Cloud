import mongoose, { Schema } from "mongoose";

export interface IUser{
  name?:string;
  email:string;
  password:string
}
export const UserSchema = new Schema<IUser>(
  {
    name:{type:String, require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}
  }
)
export const User = mongoose.model<IUser>("User",UserSchema)
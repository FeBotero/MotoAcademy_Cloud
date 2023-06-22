import mongoose, { Schema } from "mongoose";


export interface IClient{
  email:string;
  password:string
}
export const ClientSchema = new Schema<IClient>(
  {
    email:{type:String,require:true},
    password:{type:String}
  }
)
export const Client = mongoose.model<IClient>("Client",ClientSchema)
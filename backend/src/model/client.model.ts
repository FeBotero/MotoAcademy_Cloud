import mongoose, { Schema } from "mongoose";


export interface IClient{
  email:string;
  isActive?:boolean
  pass?:string;
}
export const ClientSchema = new Schema<IClient>(
  {
    email:{type:String,require:true},
    isActive:{type:Boolean},
    pass:{type:String}
  }
)
export const Client = mongoose.model<IClient>("Client",ClientSchema)
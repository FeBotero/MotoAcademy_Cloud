import mongoose, { Schema } from "mongoose";


export interface IClient{
  email:string;
  status:boolean
}
export const ClientSchema = new Schema<IClient>(
  {
    email:{type:String,require:true},
    status:{type:Boolean}
  }
)
export const Client = mongoose.model<IClient>("Client",ClientSchema)
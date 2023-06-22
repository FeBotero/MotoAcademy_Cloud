import {Client,IClient,} from "../model/client.model"

class UserRepository{
  getAll(){
    return Client.find();
  }
  getByID(id:string){
    return Client.findById(id);
  }
  getByEmail(email:string){
    return Client.findOne({email})
  }
  create(body:IClient){
    return Client.create(body);
  }
  updateByID(id:string, body:Partial<IClient>){
    return Client.updateOne({_id:id},{$set:body})
  }
  deleteByID(id:string){
    return Client.deleteOne({_id:id})
  }
    
}
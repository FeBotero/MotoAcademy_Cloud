import {User,IUser} from "../model/user.model"

class UserRepository{
  getAll(){
    return User.find();
  }
  getByID(id:string){
    return User.findById(id);
  }
  getByEmail(email:string){
    return User.findOne({email})
  }
  create(body:IUser){
    return User.create(body);
  }
  updateByID(id:string, body:Partial<IUser>){
    return User.updateOne({_id:id},{$set:body})
  }
  deleteByID(id:string){
    return User.deleteOne({_id:id})
  }
    
}

export default new UserRepository();
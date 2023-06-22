import UserRepository from "../repository/user.repository"
import { IUser } from "../model/user.model";

class UserService{
  getAll(){
    return UserRepository.getAll();
  }
  getByID(id:string){
    return UserRepository.getByID(id);
  }
  getByEmail(email:string){
    return UserRepository.getByEmail(email)
  }
  async create(body:IUser){
    return UserRepository.create(body);
  }
  updateByID(id:string, body:Partial<IUser>){
    return UserRepository.updateByID(id,body)
  }
  deleteByID(id:string){
    return UserRepository.deleteByID(id)
  }
}
export default new UserService();
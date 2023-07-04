import UserRepository from "../repository/user.repository"
import { IUser } from "../model/user.model";
import bcrypt from "bcrypt"

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
    const user = await UserRepository.getByEmail(body.email);
  if (user) throw new Error("Usuário já cadastrado!");
  
  if (body.password) {
    body.password = await bcrypt.hash(body.password, 10);
  }
  return UserRepository.create(body);
}
  async updateByID(id:string, body:Partial<IUser>){
   if (body.password) {
      body.password = await bcrypt.hash(body.password, 10);
    }
    return UserRepository.updateByID(id, body);
  
  }
  deleteByID(id:string){
    return UserRepository.deleteByID(id)
  }
}
export default new UserService();
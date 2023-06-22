import ClientRepository from "../repository/client.repository"
import { IClient } from "../model/client.model";

class ClientService{
  getAll(){
    return ClientRepository.getAll();
  }
  getByID(id:string){
    return ClientRepository.getByID(id);
  }
  getByEmail(email:string){
    return ClientRepository.getByEmail(email)
  }
  async create(body:IClient){
    return ClientRepository.create(body);
  }
  updateByID(id:string, body:Partial<IClient>){
    return ClientRepository.updateByID(id,body)
  }
  deleteByID(id:string){
    return ClientRepository.deleteByID(id)
  }
}
export default new ClientService();
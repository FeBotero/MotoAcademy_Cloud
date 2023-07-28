import {Request,Response, Router} from "express"
import UserService from "../services/user.service"
import bcrypt from "bcrypt"
import { IUser } from "model/user.model"

const router = Router()
interface Irequest{
  params:string,
  body:IUser
}

router.get("/",async(req:Request,res:Response)=>{
  const users = await UserService.getAll()
  if(!users){
    return res.status(404).send({message:"Não foi possivel encontrar usuários!"})
  }
  res.status(200).send(users)
})
router.post("/",async(req:Request,res:Response)=>{
  const user = UserService.getByEmail(req.body.email)

  if(!user){
    try{
      await UserService.create(req.body);
      res.status(201).send({message:"Usuário cadastrado com sucesso!"})
    }catch(error:any){
      res.status(400).send({message:error.message})
    }
  }else{
    res.status(400).send({message:"Usuário já cadastrado!"})
  }
  
})
router.put("/:id",async (req:Request,res:Response)=>{
  try{
    const user = UserService.getByID(req.params.id)

    if(!user){
      return res.status(400).send({message:"Usuário não identificado!"})
    }
    await UserService.updateByID(req.params.id,req.body)
    res.status(200).send({message:"Usuário atualizado com sucesso!"})
    
  }catch{
    res.status(404).send({message:"Não foi possivel atualizar!"})
  }
})
router.delete(
  "/:id",
    async (req: Request, res: Response) => {
    try {
      const user = await UserService.getByID(req.params.id);
      if (!user) {
        return res.status(404).send({ message: "Usuário não encontrado!" });
      }
      await UserService.deleteByID(req.params.id);
      res.status(200).send({ message: "Usuário excluído com sucesso!" });
    } catch {
      res.status(400).send({
        message: "Aconteceu algo, favor verificar as informações enviadas.",
      });
    }
  }
);




export default router;
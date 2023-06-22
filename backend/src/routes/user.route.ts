import {Request,Response, Router} from "express"
import UserService from "../services/user.service"

const router = Router()

router.get("/",async(req:Request,res:Response)=>{
  const users = await UserService.getAll()
  if(!users){
    return res.status(404).send({message:"Não foi possivel encontrar usuários!"})
  }
  res.status(200).send(users)
})
router.post("/",async(req:Request,res:Response)=>{
  try{
    await UserService.create(req.body);
    res.status(201).send({message:"Usuário cadastrado com sucesso!"})
  }catch(error:any){
    res.status(400).send({message:error.message})
  }
})




export default router;
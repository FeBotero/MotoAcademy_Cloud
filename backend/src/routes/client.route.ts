import {Request,Response, Router} from "express"
import ClientService from "../services/client.service"
import { authMiddleware } from "../middleware/auth.middleware"

const router = Router()

router.get("/",authMiddleware,async(req:Request,res:Response)=>{
  const users = await ClientService.getAll()
  
  if(!users){
    return res.status(404).send({message:"Não foi possivel encontrar usuários!"})
  }
  res.status(200).send(users)
})
router.post("/check",async(req:Request,res:Response)=>{
  const {email} = req.body
  const user = await ClientService.getByEmail(email)
  if(!user){
    return res.status(404).send({message:"Não foi possivel encontrar usuário!"})
  }
  res.status(200).send(user.isActive)
})

router.post("/",authMiddleware,async(req:Request,res:Response)=>{
  try{
    await ClientService.create(req.body);
    res.status(201).send({message:"Cliente cadastrado com sucesso!"})
  }catch(error:any){
    res.status(400).send({message:error.message})
  }
})
router.put("/:id",async(req:Request,res:Response)=>{
  try{
    await ClientService.updateByID(req.params.id,req.body);
    res.status(201).send({message:"Cliente atualizado com sucesso!"})
  }catch(error:any){
    res.status(400).send({message:error.message})
  }
})
router.delete("/:id",async(req:Request,res:Response)=>{
  try{
    await ClientService.deleteByID(req.params.id);
    res.status(201).send({message:"Cliente excluído com sucesso!"})
  }catch(error:any){
    res.status(400).send({message:error.message})
  }
})




export default router;
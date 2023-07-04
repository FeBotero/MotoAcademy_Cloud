import {Request,Response, Router} from "express"
import ClientService from "../services/client.service"

const router = Router()

router.get("/",async(req:Request,res:Response)=>{
  const users = await ClientService.getAll()
  if(!users){
    return res.status(404).send({message:"Não foi possivel encontrar usuários!"})
  }
  res.status(200).send(users)
})
router.post("/",async(req:Request,res:Response)=>{
  try{
    await ClientService.create(req.body);
    res.status(201).send({message:"Usuário cadastrado com sucesso!"})
  }catch(error:any){
    res.status(400).send({message:error.message})
  }
})
router.put("/",async(req:Request,res:Response)=>{
  try{
    await ClientService.updateByID(req.params.id,req.body);
    res.status(201).send({message:"Usuário atualizado com sucesso!"})
  }catch(error:any){
    res.status(400).send({message:error.message})
  }
})




export default router;
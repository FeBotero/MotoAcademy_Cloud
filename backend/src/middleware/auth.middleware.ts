import { NextFunction,Request,Response } from "express";
import dotenv from "dotenv"
import jwt from "jsonwebtoken";
import userService from "../services/user.service"

dotenv.config()

interface TokenJWT {
  id:string;
}

export function permissionMiddlewware(permission:string[]){
  return async(req:Request, res:Response, next:NextFunction)=>{
    const [schema,token] = req.headers.authorization!.split(" ");

    if(!token){
      return res.status(401).send({message:"Acesso negado!"})
    }
    const decoded = jwt.decode(token) as TokenJWT

    const user = await userService.deleteByID(decoded.id)

    if(!user){
      return res.status(401).send({message:"Usuário não identificado!"})
    }else{
      next()
    }

  }
}
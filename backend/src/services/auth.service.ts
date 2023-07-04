import bcrypt from "bcrypt";
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import { UserRepository } from "../repository/user.repository";
import { IUser } from "../model/user.model";


dotenv.config()

const secretKey = process.env.SECRET_KEY || ""

async function auth(email:string,password:string){
  const user = UserRepository.getByEmail(email)

  if(!user) throw new Error("Usuário não encontrado!")

  try{
    const confirmPass = await bcrypt.compare(password, user.password);

    if (!confirmPass) {
      throw new Error("Falha na autenticação!");
    }
    return jwt.sign({ id: user.id }, secretKey, { expiresIn: "1h" });
  } catch {
    throw new Error("Falha na autenticação!");
  }
}

export default {
  auth,
};
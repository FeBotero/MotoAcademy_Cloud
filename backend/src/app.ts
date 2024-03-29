import express from "express"
import cors from "cors"
import connection from "./db/dbConnect"
import userRouter from "./routes/user.route"
import clientRouter from "./routes/client.route"
import authRouter from "./routes/auth.route"
import dotenv from "dotenv";
dotenv.config();

async function main(){
  const app = express();
  const port = 3000;

  app.use(cors())
  app.use(express.json())

  app.use("/user",userRouter)
  app.use("/client",clientRouter)
  app.use("/login",authRouter)

  app.get("/",function(req,res){
    res.send("Hello Connected")
  })


  connection
    .then(()=>{
      console.log("BD online!")
      app.listen(port, ()=>{
        console.log("Aplicação Online!")
      })
    }
    )
    .catch((error)=>{
      console.log(error)
    })
  }
  main()
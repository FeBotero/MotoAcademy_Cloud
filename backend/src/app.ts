import express from "express"
import cors from "cors"
import connection from "./db/dbConnect"

  const app = express();
  const port = 3000;

  app.use(cors())
  app.use(express.json())


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

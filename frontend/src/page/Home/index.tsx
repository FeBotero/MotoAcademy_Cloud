import { useNavigate } from "react-router-dom";
import { HomeContainer } from "./style";
import { apiService } from "../../API/api";
import { useState } from "react";

export function Home(){
  const navigate = useNavigate()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
  function LoginUser(event:Event){
    event.preventDefault()
    const payload = {
      email:email,
      password:password
    }
    apiService.auth.login(payload).then(response=>{
      const data = response.data;
      localStorage.setItem('user',JSON.stringify(data))
      navigate("/admin/list")
      window.location.reload()
    })
  }

  return(
    <HomeContainer>
      <h1>Disconnected</h1>
      <h3>Seja bem vindo a plataforma de controle de Wifi Corporativo</h3>
      <form onSubmit={LoginUser}>
        <input type="text" id="inputLogin" placeholder="Usuário" onChange={e=>setEmail(e.target.value)}/>
        <input type="password" id="passLogin" placeholder="Senha"onChange={e=>setPassword(e.target.value)}/>
        <button type="submit">Entrar</button>
      </form>


    </HomeContainer>

  )
}
import { useNavigate } from "react-router-dom";
import { ContentBrand, ContentLogin, HomeContainer } from "./style";
import { apiService } from "../../API/api";
import { FormEvent, useState } from "react";

export function Home(){
  const navigate = useNavigate()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
  function LoginUser(event:FormEvent<HTMLFormElement>){
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
     <ContentLogin>
     <h1>Controle de Wi-fi</h1>
      
      <form onSubmit={LoginUser}>
        <label htmlFor="inputLogin">E-mail</label>
        <input type="text" id="inputLogin" placeholder="Digite seu usuário" onChange={e=>setEmail(e.target.value)}/>
        <label htmlFor="passLogin">Senha</label>
        <input type="password" id="passLogin" placeholder="Digite sua senha"onChange={e=>setPassword(e.target.value)}/>
        <button type="submit">Entrar</button>
      </form>

     </ContentLogin>
     <ContentBrand>
        <img src="/public/logo.png" alt="logo_WifiDisconnected" />
     </ContentBrand>

    </HomeContainer>

  )
}
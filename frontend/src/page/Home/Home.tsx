import { useNavigate } from "react-router-dom";
import { HomeContainer } from "./style";

export function Home(){
  const navigate = useNavigate()
  
  function LoginUser(){
    navigate("/user")
  }

  return(
    <HomeContainer>
      <h1>Disconnected</h1>
      <h3>Seja bem vindo a plataforma de controle de Wifi Corporativo</h3>
      <form onSubmit={LoginUser}>
        <input type="text" id="inputLogin" placeholder="Usuário"/>
        <input type="password" id="passLogin" placeholder="Senha"/>
        <button type="submit">Entrar</button>
      </form>


    </HomeContainer>

  )
}
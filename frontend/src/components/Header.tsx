import { useNavigate } from "react-router-dom";
import { ContainerHeader } from "./style";

export function Header(){
  const navigate = useNavigate()

  function logout(){
    localStorage.clear()
    navigate('/')
  }


  return(
    <ContainerHeader>
      <div>
        <img src="/src/assets/logo.png" alt="" />
      </div>
      <div>
        <button onClick={logout}>Logout</button>
      </div>
    </ContainerHeader>
  )
}
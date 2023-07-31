import { useNavigate } from "react-router-dom";
import { ContainerHeader } from "./style";
import logo from "../assets/logoIcon.png"

export function Header(){
  const navigate = useNavigate()

  function logout(){
    localStorage.clear()
    navigate('/')
  }


  return(
    <ContainerHeader>
      <div>
        <img src={logo} alt="Logo Wifi Disconnected" />
      </div>
      <div>
        <button onClick={logout}>Logout</button>
      </div>
    </ContainerHeader>
  )
}
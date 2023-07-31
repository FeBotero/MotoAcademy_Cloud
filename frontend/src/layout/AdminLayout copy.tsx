import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Content, LayoutContainer } from "./style";

export function AdminLayout(){
  return(
    <LayoutContainer>
      <Header/>
      <Content>
        <Outlet/>
      </Content>
    </LayoutContainer>

  )
}
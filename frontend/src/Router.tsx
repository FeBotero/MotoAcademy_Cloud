import { Route, Routes } from "react-router-dom"
import { Home } from "./page/Home/Home"
import { ListUser } from "./page/ListUser/ListUser"
import { DefaultLayout } from "./layout/DefaultLayout"
import { AdminLayout } from "./layout/AdminLayout copy"


export function Router() {
  return (
    <Routes>


      <Route path="/admin" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
      </Route>


      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin" element={<ListUser />} />
      </Route>


    </Routes>



  )
}
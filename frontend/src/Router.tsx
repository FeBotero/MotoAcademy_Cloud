import { Route, Routes } from "react-router-dom"
import { Home } from "./page/Home"
import { ListUser } from "./page/ListUser"
import { DefaultLayout } from "./layout/DefaultLayout"
import { AdminLayout } from "./layout/AdminLayout copy"


export function Router() {
  return (
    <Routes>


      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
      </Route>


      <Route path="/admin/*" element={<AdminLayout />}>
        <Route path="list" element={<ListUser />} />
      </Route>


    </Routes>



  )
}
import { BrowserRouter } from "react-router-dom"
import { Home } from "./page/Home/Home"
import { GlobalStyle } from "./styles/global"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"


function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <Home/>
     
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App

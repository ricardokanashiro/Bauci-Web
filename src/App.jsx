import { useContext } from "react"

import Layout from "../components/Layout"
import Usuarios from "../components/Usuarios"
import Produtos from "../components/Produtos"
import Categorias from "../components/Categorias"
import Login from "../components/LoginPage"

import ModalsContextProvider from "../contexts/ModalsContext"
import DataContextProvider from "../contexts/DataContext"

import { NavigationContext } from "../contexts/NavigationContext"

const App = () => {

   const { selectedSection, setSelectedSection } = useContext(NavigationContext)

   return (
      <DataContextProvider>
      <ModalsContextProvider>
         <Login/>
      </ModalsContextProvider>
      </DataContextProvider>
   )
}

export default App
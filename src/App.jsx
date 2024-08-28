import { useContext } from "react"

import Layout from "../components/Layout"
import Usuarios from "../components/Usuarios"
import Produtos from "../components/Produtos"
import Categorias from "../components/Categorias"

import ModalsContextProvider from "../contexts/ModalsContext"
import DataContextProvider from "../contexts/DataContext"

import { NavigationContext } from "../contexts/NavigationContext"

const App = () => {

   const { selectedSection, setSelectedSection } = useContext(NavigationContext)

   return (
      <DataContextProvider>
      <ModalsContextProvider>
         <Layout
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
         >
            {selectedSection === "categorias" && (<Categorias />)}
            {selectedSection === "usuarios" && (<Usuarios />)}
            {selectedSection === "produtos" && (<Produtos />)}
         </Layout>
      </ModalsContextProvider>
      </DataContextProvider>
   )
}

export default App
import { useState } from "react"

import Layout from "../components/Layout"
import Categorias from "../components/Categorias"
import Usuarios from "../components/Usuarios"
import Produtos from "../components/Produtos"
import ModalsContextProvider from "../contexts/ModalsContext"

const App = () => {

   const [selectedSection, setSelectedSection] = useState("produtos")

   return (
      <ModalsContextProvider>
      <Layout
         selectedSection={selectedSection}
         setSelectedSection={setSelectedSection}
      >
         {selectedSection === "produtos" && (<Categorias />)}
         {selectedSection === "usuarios" && (<Usuarios />)}
      </Layout>
      </ModalsContextProvider>
   )
}

export default App
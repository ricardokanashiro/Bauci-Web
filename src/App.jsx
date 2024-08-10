import { useState } from "react"

import Layout from "../components/Layout"
import Categorias from "../components/Categorias"
import Usuarios from "../components/Usuarios"
import Produtos from "../components/Produtos"

const App = () => {

   const [selectedSection, setSelectedSection] = useState("produtos")

   return (
      <Layout
         selectedSection={selectedSection}
         setSelectedSection={setSelectedSection}
      >
         {selectedSection === "produtos" && (<Produtos />)}
         {selectedSection === "usuarios" && (<Usuarios />)}
      </Layout>
   )
}

export default App
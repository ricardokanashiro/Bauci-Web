import { useState } from "react"

import Layout from "../components/layout"
import Categorias from "../components/Categorias"
import Usuarios from "../components/Usuarios"

const App = () => {

   const [selectedSection, setSelectedSection] = useState("produtos")

   return (
      <Layout
         selectedSection={selectedSection}
         setSelectedSection={setSelectedSection}
      >
         {selectedSection === "produtos" && (<Categorias />)}
         {selectedSection === "usuarios" && (<Usuarios />)}
      </Layout>
   )
}

export default App
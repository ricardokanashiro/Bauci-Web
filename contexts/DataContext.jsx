import { createContext, useState } from "react"

import { categorias } from "../data.js"

const DataContext = createContext()

const DataContextProvider = ({ children }) => {

   const [sharedCategorias, setSharedCategorias] = useState(categorias)

   return (
      <DataContext.Provider>
         { children }
      </DataContext.Provider>
   )
}

export default DataContextProvider
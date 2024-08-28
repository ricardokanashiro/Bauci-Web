import { createContext, useState } from "react"

import { categorias } from "../data.js"

export const DataContext = createContext()

const DataContextProvider = ({ children }) => {

   const [sharedCategorias, setSharedCategorias] = useState(categorias)

   return (
      <DataContext.Provider value={{ sharedCategorias, setSharedCategorias }}>
         { children }
      </DataContext.Provider>
   )
}

export default DataContextProvider
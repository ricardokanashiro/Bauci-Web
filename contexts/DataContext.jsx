import { createContext, useState } from "react"

import { categorias, usuarios } from "../data.js"

export const DataContext = createContext()

const DataContextProvider = ({ children }) => {

   const [sharedCategorias, setSharedCategorias] = useState(categorias)
   const [sharedUsers, setSharedUsers] = useState(usuarios)

   return (
      <DataContext.Provider value={{ sharedCategorias, setSharedCategorias }}>
         { children }
      </DataContext.Provider>
   )
}

export default DataContextProvider
import { createContext, useState } from "react"

const DataContext = createContext()

const DataContextProvider = ({ children }) => {

   const [categorias, setCategorias] = useState([])

   return (
      <DataContext.Provider>
         { children }
      </DataContext.Provider>
   )
}

export default DataContextProvider
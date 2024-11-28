import { createContext, useEffect, useState } from "react"

export const DataContext = createContext()

const DataContextProvider = ({ children }) => {

   const [sharedCategorias, setSharedCategorias] = useState([])
   const [sharedUsers, setSharedUsers] = useState([])
   const [sharedProdutos, setSharedProdutos] = useState([])

useEffect(() => {

      const fetchDataFunc = async () => {

         const token = JSON.stringify(localStorage.getItem('loginCredentials')).replace(/"/g, "")

         if (token) {

            try {
               
               const response = await fetch(`https://bauciapi-production.up.railway.app/categoria`, {
                  method: "GET",
                  headers: {
                     'Authorization': `Bearer ${token}`,
                  },
               })

               const fetchedData = await response.json()

               setSharedCategorias(fetchedData)
            }
            catch (error) {
               console.log("erro: " + error.message)
            }

         }
      }

      fetchDataFunc()

   }, [])

   return (
      <DataContext.Provider value={{ sharedCategorias, setSharedCategorias, sharedUsers, setSharedUsers, sharedProdutos, setSharedProdutos }}>
         {children}
      </DataContext.Provider>
   )
}

export default DataContextProvider
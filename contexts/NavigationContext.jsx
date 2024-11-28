import { createContext, useState } from "react"

export const NavigationContext = createContext()

const NavigationContextProvider = ({ children }) => {

   const [selectedSection, setSelectedSection] = useState("categorias")
   const [selectedCategory, setSelectedCategory] = useState("")
   const [selectedProduct, setSelectedProduct] = useState("")
   const [logged, setLogged] = useState(false)


   return (
      <NavigationContext.Provider value={
         {
            selectedSection, setSelectedSection,
            selectedCategory, setSelectedCategory,
            selectedProduct, setSelectedProduct,
            logged, setLogged
         }
      }>
         { children }
      </NavigationContext.Provider>
   )
}

export default NavigationContextProvider
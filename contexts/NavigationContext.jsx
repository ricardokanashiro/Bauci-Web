import { createContext, useState } from "react"

export const NavigationContext = createContext()

const NavigationContextProvider = ({ children }) => {

   const [selectedSection, setSelectedSection] = useState("categorias")
   const [selectedCategory, setSelectedCategory] = useState("")
   const [selectedProduct, setSelectedProduct] = useState("")

   return (
      <NavigationContext.Provider value={
         {
            selectedSection, setSelectedSection,
            selectedCategory, setSelectedCategory,
            selectedProduct, setSelectedProduct
         }
      }>
         { children }
      </NavigationContext.Provider>
   )
}

export default NavigationContextProvider
import { createContext, useState } from "react"

export const NavigationContext = createContext()

const NavigationContextProvider = ({ children }) => {

   const [selectedSection, setSelectedSection] = useState("categorias")
   const [selectedCategory, setSelectedCategory] = useState({})

   return (
      <NavigationContext.Provider value={
         {
            selectedSection, setSelectedSection,
            selectedCategory, setSelectedCategory
         }
      }>
         { children }
      </NavigationContext.Provider>
   )
}

export default NavigationContextProvider
import { createContext, useState } from "react"

export const ModalsContext = createContext()

const ModalsContextProvider = ({ children }) => {

   const [modalWrapperActive, setModalWrapperActive] = useState(false)
   const [addCategoryModalActive, setAddCategoryModalActive] = useState(false)

   function toggleAddCategoryModal() {
      setModalWrapperActive(prev => !prev)
      setAddCategoryModalActive(prev => !prev)
   }

   return (
    <ModalsContext.Provider value={{
       modalWrapperActive, 
       addCategoryModalActive, toggleAddCategoryModal
    }}>
       { children }
       
    </ModalsContext.Provider>
 )
}

export default ModalsContextProvider

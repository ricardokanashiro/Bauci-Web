import { createContext, useState } from "react"

export const ModalsContext = createContext()

const ModalsContextProvider = ({ children }) => {

   const [modalWrapperActive, setModalWrapperActive] = useState(false)
   const [editCategoryModalActive, setEditCategoryModalActive] = useState(false)
   const [deleteCategoryModalActive, setDeleteCategoryModalActive] = useState(false)
   const [deleteProductModalActive, setDeleteProductModalActive] = useState(false)

   function toggleEditCategoryModal() {
      setModalWrapperActive(prev => !prev)
      setEditCategoryModalActive(prev => !prev)
   }

   function toggleDeleteCategoryModal() {
      setModalWrapperActive(prev => !prev)
      setDeleteCategoryModalActive(prev => !prev)
   }

   function toggleDeleteProductModal() {
      setModalWrapperActive(prev => !prev)
      setDeleteProductModalActive(prev => !prev)
   }

   return (
      <ModalsContext.Provider value={{
         modalWrapperActive, 
         editCategoryModalActive, toggleEditCategoryModal,
         deleteCategoryModalActive, toggleDeleteCategoryModal,
         deleteProductModalActive, toggleDeleteProductModal
      }}>
         { children }
      </ModalsContext.Provider>
   )
}

export default ModalsContextProvider
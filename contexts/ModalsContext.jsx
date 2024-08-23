import { createContext, useState } from "react"

export const ModalsContext = createContext()

const ModalsContextProvider = ({ children }) => {

   const [modalWrapperActive, setModalWrapperActive] = useState(false)
   const [editCategoryModalActive, setEditCategoryModalActive] = useState(false)
   const [deleteCategoryModalActive, setDeleteCategoryModalActive] = useState(false)
   const [deleteProductModalActive, setDeleteProductModalActive] = useState(false)
   const [addProductModalActive, setAddProductModalActive] = useState(false)
   const [editProductModalActive, setEditProdutModalActive] = useState(false)

   const [toDeleteCategory, setToDeleteCategory] = useState("")
   const [toDeleteProduct, setToDeleteProduct] = useState("")

   const [toEditProduct, setToEditProduct] = useState({})

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

   function toggleAddProductModal() {
      setModalWrapperActive(prev => !prev)
      setAddProductModalActive(prev => !prev)
   }

   function toggleEditProductModal() {
      setModalWrapperActive(prev => !prev)
      setEditProdutModalActive(prev => !prev)
   }

   return (
      <ModalsContext.Provider value={{
         modalWrapperActive, 
         editCategoryModalActive, toggleEditCategoryModal,
         deleteCategoryModalActive, toggleDeleteCategoryModal,
         deleteProductModalActive, toggleDeleteProductModal,
         toDeleteCategory, setToDeleteCategory,
         toDeleteProduct, setToDeleteProduct,
         addProductModalActive, toggleAddProductModal,
         editProductModalActive, toggleEditProductModal,
         toEditProduct, setToEditProduct
      }}>
         { children }
      </ModalsContext.Provider>
   )
}

export default ModalsContextProvider
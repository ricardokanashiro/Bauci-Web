import { createContext, useState } from "react"

export const ModalsContext = createContext()

const ModalsContextProvider = ({ children }) => {

   const [modalWrapperActive, setModalWrapperActive] = useState(false)
   const [addCategoryModalActive, setAddCategoryModalActive] = useState(false)

   const [editCategoryModalActive, setEditCategoryModalActive] = useState(false)
   const [deleteCategoryModalActive, setDeleteCategoryModalActive] = useState(false)
   const [deleteProductModalActive, setDeleteProductModalActive] = useState(false)
   const [addProductModalActive, setAddProductModalActive] = useState(false)
   const [editProductModalActive, setEditProdutModalActive] = useState(false)
   const [addUserModalActive, setAddUserModalActive] = useState(false)
   const [editUserModalActive, setEditUserModalActive] = useState(false)
   const [deleteUserModalActive, setDeleteUserModalActive] = useState(false)
   const [logoutModalActive, setLogoutModalActive] = useState(false)

   const [toDeleteCategory, setToDeleteCategory] = useState("")

   const [toDeleteProduct, setToDeleteProduct] = useState("")
   const [toEditProduct, setToEditProduct] = useState({})

   const [toDeleteUser, setToDeleteUser] = useState("")
   const [toEditUser, setToEditUser] = useState({})

   function toggleAddCategoryModal() {
      setModalWrapperActive(prev => !prev)
      setAddCategoryModalActive(prev => !prev)
   }

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

   function toggleAddUserModal() {
      setModalWrapperActive(prev => !prev)
      setAddUserModalActive(prev => !prev)
   }

   function toggleEditUserModal() {
      setModalWrapperActive(prev => !prev)
      setEditUserModalActive(prev => !prev)
   }

   function toggleDeleteUserModal() {
      setModalWrapperActive(prev => !prev)
      setDeleteUserModalActive(prev => !prev)
   }

   function toggleLogoutModal() {
      setModalWrapperActive(prev => !prev)
      setLogoutModalActive(prev => !prev)
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
         toEditProduct, setToEditProduct,
         addCategoryModalActive, toggleAddCategoryModal,
         addUserModalActive, toggleAddUserModal,
         editUserModalActive, toggleEditUserModal,
         deleteUserModalActive, toggleDeleteUserModal,
         toDeleteUser, setToDeleteUser,
         toEditUser, setToEditUser,
         logoutModalActive, toggleLogoutModal
      }}>
         { children }
      </ModalsContext.Provider>
   )
}

export default ModalsContextProvider

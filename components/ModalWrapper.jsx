import { useContext } from "react"

import EditCategoryModal from "./EditCategoryModal"
import DeleteCategoryModal from "./DeleteCategoryModal"
import DeleteProductModal from "./DeleteProductModal"
import AddProductModal from "./AddProductModal"
import EditProductModal from "./EditProductModal"
import AddCategoryModal from "./AddCategoryModal"

import { ModalsContext } from "../contexts/ModalsContext"

import "../css/components/modal-wrapper.css"

const ModalWrapper = ({ selectedSection }) => {

   const { 
      editCategoryModalActive, deleteCategoryModalActive, 
      deleteProductModalActive, addProductModalActive,
      editProductModalActive, addCategoryModalActive
   } = useContext(ModalsContext)

   return (
      <section className="modal-wrapper">
         {
            selectedSection === "produtos" && (
               <>
                  { editCategoryModalActive && <EditCategoryModal /> }
                  { deleteCategoryModalActive && <DeleteCategoryModal /> }
                  { deleteProductModalActive && <DeleteProductModal /> }
                  { addProductModalActive && <AddProductModal /> }
                  { editProductModalActive && <EditProductModal /> }
               </>
            )
         }

         {
            selectedSection === "categorias" && (
               <>
                  { addCategoryModalActive && <AddCategoryModal /> }
               </>
            )
         }
      </section>
   )
}

export default ModalWrapper
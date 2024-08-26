import { useContext } from "react"

import EditCategoryModal from "./EditCategoryModal"
import DeleteCategoryModal from "./DeleteCategoryModal"
import DeleteProductModal from "./DeleteProductModal"
import AddProductModal from "./AddProductModal"
import EditProductModal from "./EditProductModal"

import { ModalsContext } from "../contexts/ModalsContext"

import "../css/components/modal-wrapper.css"

const ModalWrapper = ({ selectedSection }) => {

   const { 
      editCategoryModalActive, deleteCategoryModalActive, 
      deleteProductModalActive, addProductModalActive,
      editProductModalActive
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
      </section>
   )
}

export default ModalWrapper
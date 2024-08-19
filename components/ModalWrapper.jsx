import { useContext } from "react"

import EditCategoryModal from "./EditCategoryModal"
import DeleteCategoryModal from "./DeleteCategoryModal"
import DeleteProductModal from "./DeleteProductModal"

import { ModalsContext } from "../contexts/ModalsContext"

import "../css/components/modal-wrapper.css"

const ModalWrapper = ({ selectedSection }) => {

   const { 
      editCategoryModalActive, deleteCategoryModalActive, deleteProductModalActive 
   } = useContext(ModalsContext)

   return (
      <section className="modal-wrapper">
         {
            selectedSection === "produtos" && (
               <>
                  { editCategoryModalActive && <EditCategoryModal /> }
                  { deleteCategoryModalActive && <DeleteCategoryModal /> }
                  { deleteProductModalActive && <DeleteProductModal /> }
               </>
            )
         }
      </section>
   )
}

export default ModalWrapper
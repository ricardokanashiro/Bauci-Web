import { useContext } from "react"

import { ModalsContext } from "../contexts/ModalsContext"

import "../css/components/edit-category-modal.css"

const EditCategoryModal = () => {

   const { toggleEditCategoryModal, editCategoryModalActive } = useContext(ModalsContext)

   return (
      <div className={editCategoryModalActive ? "edit-category-modal" : "edit-category-modal--disabled"}>

         <header>
            <h2>Editar Categoria</h2>

            <button onClick={toggleEditCategoryModal}>
               <img src="../assets/iconXGray.svg" alt="ícone de x" />
            </button>
         </header>


         <input type="text" placeholder="Nome da categoria" />

         <button className="edit-category-modal__apply-btn">Aplicar</button>
      </div>
   )
}

export default EditCategoryModal
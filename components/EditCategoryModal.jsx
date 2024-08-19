import { useContext } from "react"

import { ModalsContext } from "../contexts/ModalsContext"

import "../css/components/edit-category-modal.css"

const EditCategoryModal = () => {

   const { toggleEditCategoryModal } = useContext(ModalsContext)

   return (
      <div className="edit-category-modal">

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
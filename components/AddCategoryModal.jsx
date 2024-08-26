import { useContext } from "react"

import { ModalsContext } from "../contexts/ModalsContext"

import "../css/components/categorias.css"

const AddCategoryModal = () => {

   const { toggleAddCategoryModal, addCategoryModalActive } = useContext(ModalsContext)

   return (
      <div className={addCategoryModalActive ? "edit-category-modal" : "edit-category-modal--disabled"}>

         <header>
            <h2>Editar Categoria</h2>

            <button onClick={toggleAddCategoryModal}>
               <img src="../assets/iconXGray.svg" alt="ícone de x" />
            </button>
         </header>


         <input type="text" placeholder="Nome da categoria" />

         <button className="edit-category-modal__apply-btn">Aplicar</button>
      </div>
   )
}

export default AddCategoryModal
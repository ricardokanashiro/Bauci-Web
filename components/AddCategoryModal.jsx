import { useContext } from "react"

import { ModalsContext } from "../contexts/ModalsContext"

import "../css/components/categorias.css"

const AddCategoryModal = () => {

   const { toggleAddCategoryModal } = useContext(ModalsContext)

   return (
      <div className="add-category-modal">

         <header className="add-category-modal__header">
            <h2>Adicionar Categoria</h2>

            <button onClick={toggleAddCategoryModal}>
               <img src="../assets/iconXGray.svg" alt="ícone de x" />
            </button>
         </header>


         <input type="text" placeholder="Nome da categoria" />

         <button className="add-category-modal__apply-btn">Adicionar</button>
      </div>
   )
}

export default AddCategoryModal
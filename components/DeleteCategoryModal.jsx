import { useContext } from "react"

import { ModalsContext } from "../contexts/ModalsContext"

import "../css/components/delete-category-modal.css"

const DeleteCategoryModal = () => {

   const { toggleDeleteCategoryModal } = useContext(ModalsContext)

   return (
      <div className="delete-category-modal">
         <h2>Deletar Categoria?</h2>

         <p>
            Tem certeza de que deseja deletar a categoria "Cozinheiro"?
            Após essa ação não será possível recuperá-la.
         </p>

         <div className="delete-category-modal__buttons-area">
            <button className="delete-category-modal__cancelar-btn" onClick={toggleDeleteCategoryModal}>Cancelar</button>
            <button className="delete-category-modal__deletar-btn">Deletar</button>
         </div>
      </div>
   )
}

export default DeleteCategoryModal
import { useContext } from "react"

import { ModalsContext } from "../contexts/ModalsContext"

import IconEdit from "../assets/IconEditWhite.svg"
import IconTrash from "../assets/IconTrashBlack.svg"

import "../css/components/produtos-header.css"

const ProdutosHeader = () => {

   const { toggleEditCategoryModal, toggleDeleteCategoryModal } = useContext(ModalsContext)

   return (
      <header className="produtos-header">

            <h1>Cozinheiro</h1>

            <div className="produtos__actions-area">

               <button className="produtos__editar-btn" onClick={toggleEditCategoryModal}>
                  <span>Editar</span>
                  <img src={IconEdit} alt="ícone de editar" />
               </button>

               <button className="produtos__deletar-btn" onClick={toggleDeleteCategoryModal}>
                  <span>Deletar</span>
                  <img src={IconTrash} alt="ícone de deletar" />
               </button>

            </div>

         </header>
   )
}

export default ProdutosHeader
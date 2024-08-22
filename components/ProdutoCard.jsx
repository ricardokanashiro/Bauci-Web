import { useContext } from "react"

import { ModalsContext } from "../contexts/ModalsContext"

import "../css/components/produtos-card.css"

const ProdutoCard = ({ produtoImg, produtoNome, produtoPrazo, produtoDescricao }) => {

   const { toggleDeleteProductModal, setToDeleteProduct, toggleEditProductModal } = useContext(ModalsContext)

   return (
      <div className="produto-card">

         <img src={produtoImg} alt="#" />

         <div className="produto-card__content-wrapper">

            <h2>{produtoNome}</h2>

            <div className="produto-card__prazo-label">
               {produtoPrazo} dia
            </div>

            <p>{produtoDescricao}</p>

            <div className="produto-card__actions-area">

               <button className="produto-card__editar-btn" onClick={toggleEditProductModal}>
                  <span>Editar</span>
                  <img src="../assets/IconEditWhite.svg" alt="ícone de editar" />
               </button>

               <button 
                  className="produto-card__deletar-btn" 
                  onClick={() => {
                     toggleDeleteProductModal()
                     setToDeleteProduct(produtoNome)
                  }}
               >
                  <span>Deletar</span>
                  <img src="../assets/IconTrashBlack.svg" alt="ícone de deletar" />
               </button>

            </div>

         </div>

      </div>
   )
}

export default ProdutoCard
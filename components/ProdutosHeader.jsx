import IconEdit from "../assets/IconEditWhite.svg"
import IconTrash from "../assets/IconTrashBlack.svg"

import "../css/components/produtos-header.css"

const ProdutosHeader = () => {
   return (
      <header className="produtos-header">

            <h1>Cozinheiro</h1>

            <div className="produtos__actions-area">

               <button className="produtos__editar-btn">
                  <span>Editar</span>
                  <img src={IconEdit} alt="ícone de editar" />
               </button>

               <button className="produtos__deletar-btn">
                  <span>Deletar</span>
                  <img src={IconTrash} alt="ícone de deletar" />
               </button>

            </div>

         </header>
   )
}

export default ProdutosHeader
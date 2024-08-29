import { useContext } from "react"

import { ModalsContext } from "../contexts/ModalsContext"
import { DataContext } from "../contexts/DataContext"
import { NavigationContext } from "../contexts/NavigationContext"

import "../css/components/delete-product-modal.css"

const DeleteProductModal = () => {

   const { toggleDeleteProductModal, toDeleteProduct } = useContext(ModalsContext)
   const { setSharedCategorias } = useContext(DataContext)
   const { selectedCategory } = useContext(NavigationContext)

   function deleteProduct() {

      setSharedCategorias(
         categorias => categorias.map(

            categoria => categoria.nome === selectedCategory ? 

               {...categoria, produtos: categoria.produtos.filter(
                  produto => produto.nome !== toDeleteProduct
               )}

               :

               categoria
         )
      )

      toggleDeleteProductModal()
   }

   return (
      <div className="delete-product-modal">
         <h2>Deletar Produto?</h2>

         <p>
            {`Tem certeza de que deseja deletar o produto "${toDeleteProduct}"? Após essa ação não será possível recuperá-lo.`}
         </p>

         <div className="delete-product-modal__buttons-area">
            <button className="delete-product-modal__cancelar-btn" onClick={toggleDeleteProductModal}>Cancelar</button>
            <button className="delete-product-modal__deletar-btn" onClick={deleteProduct}>Deletar</button>
         </div>
      </div>
   )
}

export default DeleteProductModal
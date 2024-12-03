import { useContext, useState } from "react"

import { CircularProgress } from "@mui/material"

import notify from "../utils/notify"

import { ModalsContext } from "../contexts/ModalsContext"
import { DataContext } from "../contexts/DataContext"

import "../css/components/delete-product-modal.css"

const DeleteProductModal = () => {

   const { toggleDeleteProductModal, toDeleteProduct } = useContext(ModalsContext)
   const { setSharedProdutos } = useContext(DataContext)

   const [isLoading, setIsLoading] = useState(false)

   async function deleteProduct() {

      const token = JSON.stringify(localStorage.getItem('loginCredentials')).replace(/"/g, "")

      try {

         setIsLoading(true)

         const response = await fetch(`https://bauciapi-production.up.railway.app/produto/${toDeleteProduct.id}`, {
            method: "DELETE",
            headers: {
               'Authorization': `Bearer ${token}`
            }
         })

         const fetchedData = await response.json()

         if (response.ok) {
            toggleDeleteProductModal()
            notify(`Categoria "${toDeleteProduct.nome}" deletada com sucesso!`)
            setSharedProdutos(fetchedData)
         }

         setIsLoading(false)
      }
      catch (error) {
         console.log("erro: " + error.message)
         setIsLoading(false)
      }
   }

   return (
      <div className="delete-product-modal">
         <h2>Deletar Produto?</h2>

         <p>
            {`Tem certeza de que deseja deletar o produto "${toDeleteProduct.nome}"? Após essa ação não será possível recuperá-lo.`}
         </p>

         <div className="delete-product-modal__buttons-area">

            <button className="delete-product-modal__cancelar-btn" onClick={toggleDeleteProductModal}>Cancelar</button>

            <button className="delete-product-modal__deletar-btn" onClick={deleteProduct}>
               { isLoading ? <CircularProgress color="#FFF" size="1.5rem" /> : "Deletar" }
            </button>

         </div>
      </div>
   )
}

export default DeleteProductModal
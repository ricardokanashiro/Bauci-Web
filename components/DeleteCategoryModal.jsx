import { useContext, useState } from "react"

import { CircularProgress } from "@mui/material"

import notify from "../utils/notify"

import { ModalsContext } from "../contexts/ModalsContext"
import { DataContext } from "../contexts/DataContext"
import { NavigationContext } from "../contexts/NavigationContext"

import "../css/components/delete-category-modal.css"
import { FALSE } from "sass"

const DeleteCategoryModal = () => {

   const { toggleDeleteCategoryModal, toDeleteCategory, deleteCategoryModalActive } = useContext(ModalsContext)
   const { setSharedCategorias } = useContext(DataContext)
   const { setSelectedSection } = useContext(NavigationContext)

   const [isLoading, setIsLoading] = useState(false)

   async function deleteCategory() {

      const token = JSON.stringify(localStorage.getItem('loginCredentials')).replace(/"/g, "")

      try {

         setIsLoading(true)

         const response = await fetch(`https://bauciapi-production.up.railway.app/categoria/${toDeleteCategory.id}`, {
            method: "DELETE",
            headers: {
               'Authorization': `Bearer ${token}`
            }
         })

         const fetchedData = await response.json()

         if (response.ok) {
            setSharedCategorias(fetchedData)
            toggleDeleteCategoryModal()
            setSelectedSection("categorias")
            notify(`Categoria "${toDeleteCategory.nome}" deletada com sucesso!`)
         }

         setIsLoading(false)

      }
      catch (error) {
         setIsLoading(false)
         console.log("erro: " + error.message)
      }

   }

   return (
      <div className={deleteCategoryModalActive ? "delete-category-modal" : "delete-category-modal--disabled"}>
         <h2>Deletar Categoria?</h2>

         <p>
            {
               `Tem certeza de que deseja deletar a categoria "${toDeleteCategory.nome}"? Após essa ação não será possível recuperá-la.`
            }
         </p>

         <div className="delete-category-modal__buttons-area">

            <button className="delete-category-modal__cancelar-btn" onClick={toggleDeleteCategoryModal}>Cancelar</button>

            <button className="delete-category-modal__deletar-btn" onClick={deleteCategory}>
               {isLoading ? <CircularProgress color="#FFF" size="1.5rem" /> : "Deletar"}
            </button>

         </div>
      </div>
   )
}

export default DeleteCategoryModal
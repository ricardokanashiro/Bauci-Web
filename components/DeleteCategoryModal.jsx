import { useContext } from "react"

import { ModalsContext } from "../contexts/ModalsContext"
import { DataContext } from "../contexts/DataContext"
import { NavigationContext } from "../contexts/NavigationContext"

import "../css/components/delete-category-modal.css"

const DeleteCategoryModal = () => {

   const { toggleDeleteCategoryModal, toDeleteCategory, deleteCategoryModalActive } = useContext(ModalsContext)
   const { setSharedCategorias } = useContext(DataContext)
   const { setSelectedSection } = useContext(NavigationContext)

   function deleteCategory() {

      console.log(toDeleteCategory)

      setSharedCategorias(categorias => categorias.filter(categoria => categoria.nome !== toDeleteCategory))

      toggleDeleteCategoryModal()
      setSelectedSection("categorias")
   }

   return (
      <div className={deleteCategoryModalActive ? "delete-category-modal" : "delete-category-modal--disabled"}>
         <h2>Deletar Categoria?</h2>

         <p>
            {
               `Tem certeza de que deseja deletar a categoria "${toDeleteCategory}"? Após essa ação não será possível recuperá-la.`
            }
            
         </p>

         <div className="delete-category-modal__buttons-area">
            <button className="delete-category-modal__cancelar-btn" onClick={toggleDeleteCategoryModal}>Cancelar</button>
            <button className="delete-category-modal__deletar-btn" onClick={deleteCategory}>Deletar</button>
         </div>
      </div>
   )
}

export default DeleteCategoryModal
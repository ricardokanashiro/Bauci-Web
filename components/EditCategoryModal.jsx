import { useContext } from "react"

import { ModalsContext } from "../contexts/ModalsContext"
import { DataContext } from "../contexts/DataContext"

import "../css/components/edit-category-modal.css"
import { NavigationContext } from "../contexts/NavigationContext"

const EditCategoryModal = () => {

   const { toggleEditCategoryModal, editCategoryModalActive } = useContext(ModalsContext)
   const { setSharedCategorias } = useContext(DataContext)
   const { selectedCategory, setSelectedCategory } = useContext(NavigationContext)

   function editCategory() {
      const newName = document.querySelector(".edit-category-modal input").value

      setSharedCategorias(categorias => categorias.map(
         categoria => categoria.nome === selectedCategory ?
            { ...categoria, nome: newName }
            :
            categoria
      ))

      setSelectedCategory(newName)

      toggleEditCategoryModal()
   }

   return (
      <div className={editCategoryModalActive ? "edit-category-modal" : "edit-category-modal--disabled"}>

         <header>
            <h2>Editar Categoria</h2>

            <button onClick={toggleEditCategoryModal}>
               <img src="../assets/iconXGray.svg" alt="ícone de x" />
            </button>
         </header>


         <input type="text" placeholder="Nome da categoria" />

         <button className="edit-category-modal__apply-btn" onClick={editCategory}>Aplicar</button>
      </div>
   )
}

export default EditCategoryModal
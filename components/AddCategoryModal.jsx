import { useContext, useState } from "react"

import notify from "../utils/notify"

import { ModalsContext } from "../contexts/ModalsContext"
import { DataContext } from "../contexts/DataContext"

import "../css/components/categorias.css"

const AddCategoryModal = () => {

   const [categoriaName, setCategoriaName] = useState("")

   const { toggleAddCategoryModal } = useContext(ModalsContext)
   const { setSharedCategorias } = useContext(DataContext)

   function addCategoria() {

      const newCategoria = {
         nome: categoriaName,
         produtos: []
      }

      setSharedCategorias(categorias => [...categorias, newCategoria])
      toggleAddCategoryModal()

      notify(`Categoria "${categoriaName}" criada com sucesso!`)
   }

   return (
      <div className="add-category-modal">

         <header className="add-category-modal__header">
            <h2>Adicionar Categoria</h2>

            <button onClick={toggleAddCategoryModal}>
               <img src="../assets/iconXGray.svg" alt="ícone de x" />
            </button>
         </header>


         <input type="text" placeholder="Nome da categoria" onChange={(e) => setCategoriaName(e.target.value)} />

         <button className="add-category-modal__apply-btn" onClick={addCategoria}>Adicionar</button>
      </div>
   )
}

export default AddCategoryModal
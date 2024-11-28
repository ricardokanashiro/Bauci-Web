import { useContext, useRef, useState } from "react"

import { CircularProgress } from "@mui/material"

import notify from "../utils/notify"

import { ModalsContext } from "../contexts/ModalsContext"
import { DataContext } from "../contexts/DataContext"

import "../css/components/edit-category-modal.css"
import { NavigationContext } from "../contexts/NavigationContext"

const EditCategoryModal = () => {

   const { toggleEditCategoryModal, editCategoryModalActive } = useContext(ModalsContext)
   const { setSharedCategorias } = useContext(DataContext)
   const { selectedCategory, setSelectedCategory } = useContext(NavigationContext)

   const oldName = useRef(selectedCategory.nome)

   const [newName, setNewName] = useState("")
   const [errorOnEdit, setErrorOnEdit] = useState("")
   const [isLoading, setIsLoading] = useState(false)

   async function editCategory() {

      if(!newName) {
         setErrorOnEdit("O campo deve ser preenchido!")
         return
      }

      const token = JSON.stringify(localStorage.getItem('loginCredentials')).replace(/"/g, "")

      try {

         setIsLoading(true)

         const response = await fetch(`https://bauciapi-production.up.railway.app/categoria/${selectedCategory.id}`, {
            method: "PUT",
            headers: {
               'Authorization': `Bearer ${token}`,
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               nome: newName
            })
         })

         const fetchedData = await response.json()
         
         if (response.ok) {
            setSharedCategorias(fetchedData)
            toggleEditCategoryModal()
            notify(`Categoria "${oldName.current}" editada com sucesso!`)
            setSelectedCategory(prev => ({ ...prev, nome: newName }))
         }

         setErrorOnEdit(fetchedData.error)
         setIsLoading(false)
      }
      catch (error) {
         console.log("erro: " + error.message)
         setIsLoading(false)
      }

   }

   return (
      <div className={editCategoryModalActive ? "edit-category-modal" : "edit-category-modal--disabled"}>

         <header>
            <h2>Editar Categoria</h2>

            <button onClick={toggleEditCategoryModal}>
               <img src="../assets/iconXGray.svg" alt="ícone de x" />
            </button>
         </header>

         <div className="edit-category-modal__input-wrapper">

            <input 
               type="text" 
               placeholder="Nome da categoria" 
               onChange={(e) => e.target.value.length <= 30 && setNewName(e.target.value)}
               value={newName}
            />

            <p>{newName.length}/30</p>

         </div>

         <div className="edit-category-modal__error-message">
            { errorOnEdit && <p>{errorOnEdit}</p> }
         </div>

         <button className="edit-category-modal__apply-btn" onClick={editCategory}>
            { isLoading ? <CircularProgress color="#FFF" size="1.5rem" /> : "Aplicar" }
         </button>
      </div>
   )
}

export default EditCategoryModal
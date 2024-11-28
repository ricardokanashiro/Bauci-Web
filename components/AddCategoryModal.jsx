import { useContext, useState } from "react"
import { CircularProgress } from "@mui/material"

import notify from "../utils/notify"

import { ModalsContext } from "../contexts/ModalsContext"
import { DataContext } from "../contexts/DataContext"

import "../css/components/categorias.css"

const AddCategoryModal = () => {

   const [categoriaName, setCategoriaName] = useState("")
   const [categoriaNomeLength, setCategoriaNomeLength] = useState(0)
   const [errorOnAdd, setErrorOnAdd] = useState("")
   const [isLoading, setIsLoading] = useState(false)

   const { toggleAddCategoryModal } = useContext(ModalsContext)
   const { setSharedCategorias } = useContext(DataContext)

   async function addCategoria() {

      if(!categoriaName) {
         setErrorOnAdd("O campo deve estar preenchido!")
         return
      }

      const token = JSON.stringify(localStorage.getItem('loginCredentials')).replace(/"/g, "")

      try {

         setIsLoading(true)

         const response = await fetch(`https://bauciapi-production.up.railway.app/categoria`, {
            method: "POST",
            headers: {
               'Authorization': `Bearer ${token}`,
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               nome: categoriaName
            })
         })

         const fetchedData = await response.json()
         
         if (response.ok) {
            setSharedCategorias(fetchedData)
            toggleAddCategoryModal()
            notify(`Categoria "${categoriaName}" criada com sucesso!`)
         }

         setErrorOnAdd(fetchedData.error)
         setIsLoading(false)
      }
      catch (error) {
         console.log("erro: " + error.message)
         setIsLoading(false)
      }
   }

   return (
      <div className="add-category-modal">

         <header className="add-category-modal__header">
            <h2>Adicionar Categoria</h2>

            <button onClick={toggleAddCategoryModal}>
               <img src="../assets/iconXGray.svg" alt="ícone de x" />
            </button>
         </header>

         <div className="add-category-modal__input-wrapper">

            <input
               type="text"
               placeholder="Nome da categoria"
               onChange={(e) => {

                  if (e.target.value.length > 30) {
                     return
                  }

                  setCategoriaName(e.target.value)
                  setCategoriaNomeLength(e.target.value.length)
               }}
               value={categoriaName}
            />

            <p>{categoriaNomeLength}/30</p>

         </div>

         {errorOnAdd && (
            <div className="add-category-modal__error-message">
               <p>{errorOnAdd}</p>
            </div>
         )}

         <button className="add-category-modal__apply-btn" onClick={addCategoria}>
            { isLoading ? (<CircularProgress color="#FFF" size="1.5rem" />) : "Adicionar" }
         </button>
      </div>
   )
}

export default AddCategoryModal
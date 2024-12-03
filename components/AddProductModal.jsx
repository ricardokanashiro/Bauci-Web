import { useContext, useState } from "react"

import { CircularProgress } from "@mui/material"

import notify, { notifyError } from "../utils/notify"

import { ModalsContext } from "../contexts/ModalsContext"
import { DataContext } from "../contexts/DataContext"
import { NavigationContext } from "../contexts/NavigationContext"

import "../css/components/add-product-modal.css"

const AddProductModal = () => {

   const { toggleAddProductModal, addProductModalActive } = useContext(ModalsContext)
   const { setSharedProdutos } = useContext(DataContext)
   const { selectedCategory } = useContext(NavigationContext)

   const [isLoading, setIsLoading] = useState(false)

   const [newProduct, setNewProduct] = useState({
      img: "",
      nome: "",
      prazoMinimo: "",
      prazoMaximo: "",
      descricao: ""
   })

   const [errorsOnAdd, setErrorsOnAdd] = useState({
      nomeError: "",
      prazoMinimoError: "",
      prazoMaximoError: "",
      descricaoError: ""
   })

   async function addProduct() {

      let thereIsError

      setIsLoading(true)
      setErrorsOnAdd({})

      if(!newProduct.img) {
         notifyError("Insira uma imagem válida!")
         setIsLoading(false)
         return
      }

      if(!newProduct.nome) {
         setErrorsOnAdd(prev => ({ ...prev, nomeError: "O campo deve ser preenchido!" }))
         thereIsError = true
      }

      if(!newProduct.prazoMinimo) {
         setErrorsOnAdd(prev => ({ ...prev, prazoMinimoError: "O campo deve ser preenchido!" }))
         thereIsError = true
      }

      if(!newProduct.prazoMaximo) {
         setErrorsOnAdd(prev => ({ ...prev, prazoMaximoError: "O campo deve ser preenchido!" }))
         thereIsError = true
      }

      if(!newProduct.descricao) {
         setErrorsOnAdd(prev => ({ ...prev, descricaoError: "O campo deve ser preenchido!" }))
         thereIsError = true
      }

      if(thereIsError) {
         setIsLoading(false)
         return
      }

      const formData = new FormData()

      formData.append("image", newProduct.img)
      formData.append("nome", newProduct.nome)
      formData.append("prazoMinimo", newProduct.prazoMinimo)
      formData.append("prazoMaximo", newProduct.prazoMaximo)
      formData.append("descricao", newProduct.descricao)
      formData.append("categoriaID", selectedCategory.id)

      try {


         const token = JSON.stringify(localStorage.getItem('loginCredentials')).replace(/"/g, "")

         const response = await fetch("https://bauciapi-production.up.railway.app/produto/", {
            method: "POST",
            headers: {
               'Authorization': `Bearer ${token}`,
            },
            body: formData
         })

         const fetchedData = await response.json()

         if (response.ok) {

            setSharedProdutos(fetchedData)
            toggleAddProductModal()
            notify(`Produto "${newProduct.nome}" adicionado com sucesso!`)
         } else {
            notifyError(fetchedData.error)
         }

         setIsLoading(false)
      }
      catch (error) {
         setIsLoading(false)
         console.log("error: " + error.message)
      }
   }

   function loadImage(e) {

      const imagePicker = document.querySelector(".add-product-modal__image-picker")
      const label = imagePicker.querySelector("p")

      const file = e.target.files[0]

      setNewProduct(prev => ({ ...prev, img: file }))

      if (file) {

         const reader = new FileReader()

         reader.onload = (event) => {
            imagePicker.style.backgroundImage = `url(${event.target.result})`
         }

         reader.readAsDataURL(file)


         label.style.display = "none"

      } else {

         imagePicker.style.backgroundImage = ""
         label.style.display = "block"

      }

   }

   return (
      <div className={addProductModalActive ? "add-product-modal" : "add-product-modal--disabled"}>

         <header>
            <h2>Adicionar Produto</h2>

            <button onClick={toggleAddProductModal}>
               <img src="../src/assets/iconXGray.svg" alt="ícone de X" />
            </button>

         </header>


         <form onSubmit={(e) => e.preventDefault()}>

            <div className="add-product-modal__image-picker">

               <p>Imagem</p>

               <button
                  className="add-product-modal__image-picker-btn"
                  onClick={() => {
                     document.querySelector('.add-product-modal__file-input').click()
                  }}
               >

                  <div className="add-product-modal__image-picker-content-wrapper">
                     <img src="../src/assets/IconEditWhite.svg" alt="ícone de selecionar imagem" />
                     <input type="file" accept="image/*" className="add-product-modal__file-input" onChange={(e) => loadImage(e)} />
                  </div>

               </button>

            </div>

            <fieldset className="add-product-modal__product-info-area">

               <div className="add-product-modal__error-message-wrapper">

                  <div className="add-product-modal__input-wrapper">

                     <input
                        type="text"
                        placeholder="Nome do produto"
                        value={newProduct.nome}
                        onChange={(e) =>
                           setNewProduct(prev => e.target.value.length <= 30 ?
                              ({ ...prev, nome: e.target.value }) : prev
                           )}
                     />

                     <p>{newProduct.nome.length}/30</p>

                  </div>

                  { 
                     errorsOnAdd.nomeError && 
                        <p className="add-product-modal__error-message">O campo deve ser preenchido!</p> 
                  }

               </div>

               <div className="add-product-modal__error-message-wrapper">

                  <div className="add-product-modal__textarea-wrapper">

                     <textarea
                        placeholder="Descrição do produto"
                        value={newProduct.descricao}
                        onChange={(e) =>
                           setNewProduct(prev => e.target.value.length <= 50 ?
                              ({ ...prev, descricao: e.target.value }) : prev
                           )}
                     ></textarea>

                     <p>{newProduct.descricao.length}/50</p>

                  </div>

                  { 
                     errorsOnAdd.descricaoError &&
                        <p className="add-product-modal__error-message">O campo deve ser preenchido!</p>
                  }

               </div>

               <div className="add-product-modal__prazo-area">

                  <h2>Prazo</h2>

                  <div className="add-product-modal__input-area">

                     <div className="add-product-modal__error-message-wrapper-number">

                        <input
                           type="number"
                           placeholder="Mínimo"
                           className="add-product-modal__inputMin"
                           value={newProduct.prazoMinimo}
                           onChange={
                              (e) => e.target.value.length <= 2 &&
                                 setNewProduct(prev => ({ ...prev, prazoMinimo: e.target.value }))
                           }
                        />

                        {
                           errorsOnAdd.prazoMinimoError &&
                              <p className="add-product-modal__error-message">O campo deve ser preenchido!</p>
                        }

                     </div>

                     <div className="add-product-modal__hifen"></div>

                     <div className="add-product-modal__error-message-wrapper-number">

                        <input
                           type="number"
                           placeholder="Máximo"
                           className="add-product-modal__inputMax"
                           value={newProduct.prazoMaximo}
                           onChange={
                              (e) => e.target.value.length <= 2 &&
                                 setNewProduct(prev => ({ ...prev, prazoMaximo: e.target.value }))
                           }
                        />

                        {
                           errorsOnAdd.prazoMaximoError &&
                              <p className="add-product-modal__error-message">O campo deve ser preenchido!</p>
                        }

                     </div>

                  </div>

               </div>

            </fieldset>

         </form>

         <button className="add-product-modal__add-btn" onClick={addProduct}>
            { isLoading ? <CircularProgress color="#FFF" size="1.5rem" /> : "Adicionar" }
         </button>

      </div>
   )
}

export default AddProductModal
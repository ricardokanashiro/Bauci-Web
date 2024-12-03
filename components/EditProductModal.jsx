import { useContext, useRef, useState } from "react"

import { CircularProgress } from "@mui/material"

import notify, { notifyError } from "../utils/notify"

import { ModalsContext } from "../contexts/ModalsContext"
import { DataContext } from "../contexts/DataContext";
import { NavigationContext } from "../contexts/NavigationContext"

import "../css/components/edit-product-modal.css"

const EditProductModal = () => {

   const { toggleEditProductModal, toEditProduct, setToEditProduct } = useContext(ModalsContext)
   const { setSharedProdutos } = useContext(DataContext)
   const { selectedProduct } = useContext(NavigationContext)

   const [isLoading, setIsLoading] = useState(false)

   const [errorOnEdit, setErrorOnEdit] = useState({
      nomeError: "",
      prazoMinimoError: "",
      prazoMaximoError: "",
      descricaoError: ""
   })

   const updatedImg = useRef()
   const oldName = useRef(toEditProduct.produtoNome)

   async function editProduct() {

      let thereIsError;

      setIsLoading(true)

      let updatedProduto = {
         img: updatedImg.current,
         nome: document.querySelector(".edit-product-modal__product-info-area input").value,
         prazoMinimo: document.querySelector(".edit-product-modal__InputMin").value,
         prazoMaximo: document.querySelector(".edit-product-modal__InputMax").value,
         descricao: document.querySelector(".edit-product-modal__product-info-area textarea").value
      }
      
      if(!updatedProduto.img) {
         notifyError("Insira uma imagem válida!")
         setIsLoading(false)
         return
      }

      setErrorOnEdit({})

      if(!updatedProduto.nome) {
         setErrorOnEdit(prev => ({ ...prev, nomeError: "O campo deve ser preenchido!" }))
         thereIsError = true
      }

      if(!updatedProduto.prazoMinimo) {
         setErrorOnEdit(prev => ({ ...prev, prazoMinimoError: "O campo deve ser preenchido!" }))
         thereIsError = true
      }

      if(!updatedProduto.prazoMaximo) {
         setErrorOnEdit(prev => ({ ...prev, prazoMaximoError: "O campo deve ser preenchido!" }))
         thereIsError = true
      }

      if(!updatedProduto.descricao) {
         setErrorOnEdit(prev => ({ ...prev, descricaoError: "O campo deve ser preenchido!" }))
         thereIsError = true
      }

      if(thereIsError) {
         setIsLoading(false)
         return
      }

      const formData = new FormData()

      formData.append("image", updatedProduto.img)
      formData.append("nome", updatedProduto.nome)
      formData.append("prazoMinimo", updatedProduto.prazoMinimo)
      formData.append("prazoMaximo", updatedProduto.prazoMaximo)
      formData.append("descricao", updatedProduto.descricao)

      const token = JSON.stringify(localStorage.getItem('loginCredentials')).replace(/"/g, "")

      try {

         const response = await fetch(`https://bauciapi-production.up.railway.app/produto/${selectedProduct.id}`, {
            method: "PUT",
            headers: {
               'Authorization': `Bearer ${token}`,
            },
            body: formData
         })

         const fetchedData = await response.json()

         if (response.ok) {
            setSharedProdutos(fetchedData)
            toggleEditProductModal()
            notify(`Produto ${oldName.current} editado com sucesso!`)
         } else {
            notifyError(fetchedData.error)
         }

         setIsLoading(false)

      }
      catch (error) {
         setIsLoading(false)
         console.log("erro: " + error.message)
      }
   }

   function loadImage(e) {

      const imagePicker = document.querySelector(".edit-product-modal__image-picker")
      const label = imagePicker.querySelector("p")

      const file = e.target.files[0]

      if (file) {

         const reader = new FileReader()

         reader.onload = (event) => {
            imagePicker.style.backgroundImage = `url(${event.target.result})`
            updatedImg.current = file
         }

         reader.readAsDataURL(file)

         label.style.display = "none"

      } else {

         imagePicker.style.backgroundImage = ""
         label.style.display = "block"

      }

   }

   return (
      <div className="edit-product-modal">

         <header>
            <h2>Editar Produto</h2>

            <button onClick={toggleEditProductModal}>
               <img src="/assets/iconXGray.svg" alt="ícone de X" />
            </button>

         </header>


         <form onSubmit={(e) => e.preventDefault()}>

            <fieldset className="edit-product-modal__image-picker" >

               <p>Imagem</p>

               <button
                  className="edit-product-modal__image-picker-btn"
                  onClick={() => {
                     document.querySelector('.edit-product-modal__file-input').click()
                  }}
               >

                  <div className="edit-product-modal__image-picker-content-wrapper">
                     <img src="../assets/IconEditWhite.svg" alt="ícone de selecionar imagem" />
                     <input type="file" accept="image/*" className="edit-product-modal__file-input" onChange={(e) => loadImage(e)} />
                  </div>

               </button>

            </fieldset>

            <fieldset className="edit-product-modal__product-info-area">

               <div className="edit-product-modal__error-message-wrapper">

                  <div className="edit-product-modal__input-wrapper">

                     <input
                        type="text"
                        placeholder="Nome do produto"
                        value={toEditProduct.produtoNome}
                        onChange={(e) => e.target.value.length <= 30 && 
                           setToEditProduct(produto => ({ ...produto, produtoNome: e.target.value }))
                        }
                     />

                     <p>{toEditProduct.produtoNome.length}/30</p>

                  </div>

                  { 
                     errorOnEdit.nomeError && 
                        <p className="edit-product-modal__error-message">O campo deve ser preenchido!</p>
                  }

               </div>

               <div className="edit-product-modal__error-message-wrapper">

                  <div className="edit-product-modal__textarea-wrapper">

                     <textarea
                        placeholder="Descrição do produto"
                        value={toEditProduct.produtoDescricao}
                        onChange={(e) => e.target.value.length <= 50 &&
                           setToEditProduct(produto => ({ ...produto, produtoDescricao: e.target.value }))
                        }
                     ></textarea>

                     <p>{toEditProduct.produtoDescricao.length}/50</p>
                  </div>

                  {
                     errorOnEdit.descricaoError &&
                        <p className="edit-product-modal__error-message">O campo deve ser preenchido!</p>
                  }


               </div>

               <div className="edit-product-modal__prazo-area">

                  <h2>Prazo</h2>

                  <div className="edit-product-modal__input-area">

                     <div className="edit-product-modal__error-message-wrapper-number">

                        <input
                           type="number"
                           placeholder="Mínimo"
                           className="edit-product-modal__InputMin"
                           value={toEditProduct.produtoPrazoMin}
                           onChange={(e) => e.target.value.length <= 2 &&
                              setToEditProduct(produto => ({ ...produto, produtoPrazoMin: e.target.value }))
                           }
                        />

                        {
                           errorOnEdit.prazoMinimoError &&
                              <p className="edit-product-modal__error-message">O campo deve ser preenchido!</p>
                        }


                     </div>

                     <div className="edit-product-modal__hifen"></div>

                     <div className="edit-product-modal__error-message-wrapper-number">

                        <input
                           className="edit-product-modal__InputMax"
                           type="number"
                           placeholder="Máximo"
                           value={toEditProduct.produtoPrazoMax}
                           onChange={(e) => e.target.value.length <= 2 &&
                              setToEditProduct(produto => ({ ...produto, produtoPrazoMax: e.target.value }))
                           }
                        />

                        {
                           errorOnEdit.prazoMaximoError &&
                              <p className="edit-product-modal__error-message">O campo deve ser preenchido!</p>
                        }

                     </div>

                  </div>

               </div>

            </fieldset>

         </form>

         <button className="edit-product-modal__add-btn" onClick={editProduct}>
            { isLoading ? <CircularProgress color="#FFF" size="1.5rem" /> :  "Aplicar" }
         </button>

      </div>
   )
}

export default EditProductModal
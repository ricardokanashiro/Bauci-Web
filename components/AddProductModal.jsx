import { useContext } from "react"

import { ModalsContext } from "../contexts/ModalsContext"

import "../css/components/add-product-modal.css"

const AddProductModal = () => {

   const { toggleAddProductModal, addProductModalActive } = useContext(ModalsContext)

   function loadImage(e) {

      const imagePicker = document.querySelector(".add-product-modal__image-picker")
      const label = imagePicker.querySelector("p")

      const file = e.target.files[0]

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
               <img src="../assets/iconXGray.svg" alt="ícone de X" />
            </button>

         </header>


         <form onSubmit={(e) => e.preventDefault()}>

            <fieldset className="add-product-modal__image-picker">

               <p>Imagem</p>

               <button
                  className="add-product-modal__image-picker-btn"
                  onClick={() => {
                     document.querySelector('.add-product-modal__file-input').click()
                  }}
               >

                  <div className="add-product-modal__image-picker-content-wrapper">
                     <img src="../assets/IconEditWhite.svg" alt="ícone de selecionar imagem" />
                     <input type="file" accept="image/*" className="add-product-modal__file-input" onChange={(e) => loadImage(e)} />
                  </div>

               </button>

            </fieldset>

            <fieldset className="add-product-modal__product-info-area">

               <input type="text" placeholder="Nome do produto" />
               <textarea placeholder="Descrição do produto"></textarea>

               <div className="add-product-modal__prazo-area">

                  <h2>Prazo</h2>
                  
                  <div className="add-product-modal__input-area">

                     <input type="number" placeholder="Mínimo" />

                     <div></div>

                     <input type="number" placeholder="Máximo" />

                  </div>

               </div>

            </fieldset>

         </form>

         <button type="submit" className="add-product-modal__add-btn">Adicionar</button>

      </div>
   )
}

export default AddProductModal
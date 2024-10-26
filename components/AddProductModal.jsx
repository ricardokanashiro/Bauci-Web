import { useContext } from "react"

import notify from "../utils/notify"

import { ModalsContext } from "../contexts/ModalsContext"
import { DataContext } from "../contexts/DataContext"
import { NavigationContext } from "../contexts/NavigationContext"

import "../css/components/add-product-modal.css"

const AddProductModal = () => {

   const { toggleAddProductModal, addProductModalActive } = useContext(ModalsContext)
   const { setSharedCategorias } = useContext(DataContext)
   const { selectedCategory } = useContext(NavigationContext)

   let selectedImg

   function addProduct() {

      const newProduct = {
         img: selectedImg,
         nome: document.querySelector(".add-product-modal__product-info-area input").value,
         prazoMinimo: document.querySelector(".add-product-modal__inputMin").value,
         prazoMaximo: document.querySelector(".add-product-modal__inputMax").value,
         descricao: document.querySelector(".add-product-modal__product-info-area textarea").value
      }

      setSharedCategorias(categorias => categorias.map(
         categoria => categoria.nome === selectedCategory ?
            { ...categoria, produtos: [...categoria.produtos, newProduct] }
            : categoria
      ))

      notify(`Produto "${newProduct.nome}" adicionado com sucesso!`)
   }

   function loadImage(e) {

      const imagePicker = document.querySelector(".add-product-modal__image-picker")
      const label = imagePicker.querySelector("p")

      const file = e.target.files[0]

      if (file) {

         const reader = new FileReader()

         reader.onload = (event) => {
            imagePicker.style.backgroundImage = `url(${event.target.result})`
            selectedImg = event.target.result
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

            <div className="add-product-modal__image-picker">

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

            </div>

            <fieldset className="add-product-modal__product-info-area">

               <div className="add-product-modal__error-message-wrapper">
                  <div className="add-product-modal__input-wrapper">
                     <input type="text" placeholder="Nome do produto" />
                     <p>1/20</p>
                  </div>

                  <p className="add-product-modal__error-message">O campo deve ser preenchido!</p>
               </div>

               <div className="add-product-modal__error-message-wrapper">
                  <div className="add-product-modal__textarea-wrapper">
                     <textarea placeholder="Descrição do produto"></textarea>
                     <p>1/20</p>
                  </div>

                  <p className="add-product-modal__error-message">O campo deve ser preenchido!</p>
               </div>

               <div className="add-product-modal__prazo-area">

                  <h2>Prazo</h2>

                  <div className="add-product-modal__input-area">

                     <div className="add-product-modal__error-message-wrapper-number">
                        <input type="number" placeholder="Mínimo" className="add-product-modal__inputMin" />
                        <p className="add-product-modal__error-message">O campo deve ser preenchido!</p>
                     </div>

                     <div className="add-product-modal__hifen"></div>

                     <div className="add-product-modal__error-message-wrapper-number">
                        <input type="number" placeholder="Máximo" className="add-product-modal__inputMax" />
                        <p className="add-product-modal__error-message">O campo deve ser preenchido!</p>
                     </div>

                  </div>

               </div>

            </fieldset>

         </form>

         <button
            className="add-product-modal__add-btn"
            onClick={() => { addProduct(); toggleAddProductModal() }}
         >
            Adicionar
         </button>

      </div>
   )
}

export default AddProductModal
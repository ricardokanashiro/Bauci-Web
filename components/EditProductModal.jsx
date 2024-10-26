import { useContext, useRef } from "react"

import notify from "../utils/notify"

import { ModalsContext } from "../contexts/ModalsContext"
import { DataContext } from "../contexts/DataContext";
import { NavigationContext } from "../contexts/NavigationContext"

import "../css/components/edit-product-modal.css"

const EditProductModal = () => {

   const { toggleEditProductModal, toEditProduct, setToEditProduct } = useContext(ModalsContext)
   const { setSharedCategorias } = useContext(DataContext)
   const { selectedProduct, selectedCategory } = useContext(NavigationContext)

   const updatedImg = useRef(toEditProduct.produtoImg)
   const oldName = useRef(toEditProduct.produtoNome)

   function editProduct() {

      let updatedProduto = {
         img: updatedImg.current,
         nome: document.querySelector(".edit-product-modal__product-info-area input").value,
         prazoMinimo: document.querySelector(".edit-product-modal__InputMin").value,
         prazoMaximo: document.querySelector(".edit-product-modal__InputMax").value,
         descricao: document.querySelector(".edit-product-modal__product-info-area textarea").value
      }

      setSharedCategorias(
         categorias => categorias
            .map(
               categoria => categoria.nome === selectedCategory ?
                  {
                     ...categoria, produtos: categoria.produtos
                        .map(
                           produto => produto.nome === selectedProduct ?
                              updatedProduto
                              :
                              produto
                        )
                  }
                  :
                  categoria
            )
      )

      toggleEditProductModal()

      notify(`Produto ${oldName.current} editado com sucesso!`)
   }

   function loadImage(e) {

      const imagePicker = document.querySelector(".edit-product-modal__image-picker")
      const label = imagePicker.querySelector("p")

      const file = e.target.files[0]

      if (file) {

         const reader = new FileReader()

         reader.onload = (event) => {
            imagePicker.style.backgroundImage = `url(${event.target.result})`
            updatedImg.current = event.target.result
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
               <img src="../assets/iconXGray.svg" alt="ícone de X" />
            </button>

         </header>


         <form onSubmit={(e) => e.preventDefault()}>

            <fieldset className="edit-product-modal__image-picker" style={{ backgroundImage: `url(${toEditProduct.produtoImg})` }}>

               <p style={{ display: "none" }}>Imagem</p>

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
                        onChange={(e) => setToEditProduct(produto => ({ ...produto, produtoNome: e.target.value }))}
                     />
                     <p>1/20</p>
                  </div>

                  <p className="edit-product-modal__error-message">O campo deve ser preenchido!</p>
               </div>

               <div className="edit-product-modal__error-message-wrapper">
                  <div className="edit-product-modal__textarea-wrapper">
                     <textarea
                        placeholder="Descrição do produto"
                        value={toEditProduct.produtoDescricao}
                        onChange={(e) => setToEditProduct(produto => ({ ...produto, produtoDescricao: e.target.value }))}
                     ></textarea>
                     <p>1/20</p>
                  </div>

                  <p className="edit-product-modal__error-message">O campo deve ser preenchido!</p>
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
                           onChange={(e) => setToEditProduct(produto => ({ ...produto, produtoPrazoMin: e.target.value }))}
                        />

                        <p className="edit-product-modal__error-message">O campo deve ser preenchido!</p>
                     </div>

                     <div className="edit-product-modal__hifen"></div>

                     <div className="edit-product-modal__error-message-wrapper-number">
                        <input
                           className="edit-product-modal__InputMax"
                           type="number"
                           placeholder="Máximo"
                           value={toEditProduct.produtoPrazoMax}
                           onChange={(e) => setToEditProduct(produto => ({ ...produto, produtoPrazoMax: e.target.value }))}
                        />

                        <p className="edit-product-modal__error-message">O campo deve ser preenchido!</p>
                     </div>
                  </div>

               </div>

            </fieldset>

         </form>

         <button className="edit-product-modal__add-btn" onClick={editProduct}>Aplicar</button>

      </div>
   )
}

export default EditProductModal
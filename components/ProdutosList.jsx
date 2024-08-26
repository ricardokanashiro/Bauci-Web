import { useContext, useState } from "react"

import ProdutoCard from "./ProdutoCard"
import { ModalsContext } from "../contexts/ModalsContext"

import { produtos } from "../data"

import "../css/components/produtos-list.css"

console.log(produtos[0].prazoMinimo)
console.log(produtos[0].prazoMaximo)

const ProdutosList = () => {

   const [searchValue, setSearchValue] = useState("")

   const { toggleAddProductModal } = useContext(ModalsContext)

   return (
      <section className="produtos-list">

         <header>

            <div className="produtos-list__search-area">

               <div className="produtos-list__input-wrapper">

                  <img src="../assets/IconSearch.svg" alt="ícone de busca" />

                  <input
                     type="text"
                     placeholder="Pesquisar produtos"
                     value={searchValue}
                     onChange={(e) => setSearchValue(e.target.value)}
                  />

                  {
                     searchValue !== "" && (
                        <button onClick={() => setSearchValue("")}>
                           <img src="../assets/iconX.svg" alt="ícone de X" />
                        </button>
                     )
                  }

               </div>


            </div>

            <button className="produtos-list__add-produto-btn" onClick={toggleAddProductModal}>

               <span>Adicionar Produto</span>

               <img
                  src="../assets/IconPlus.svg"
                  alt="ícone de '+'"
               />

            </button>

         </header>

         <section className="produtos-list__produtos-wrapper">

            {

               searchValue !== "" ?

                  produtos.map(produto => produto.nome.toLowerCase().includes(searchValue.toLowerCase()) && (
                     <ProdutoCard
                        produtoImg={produto.img}
                        produtoNome={produto.nome}
                        produtoPrazoMin={produto.prazoMinimo}
                        produtoPrazoMax={produto.prazoMaximo}
                        produtoDescricao={produto.descricao}
                     />
                  ))

                  :

                  produtos.map(produto => (
                     <ProdutoCard
                        produtoImg={produto.img}
                        produtoNome={produto.nome}
                        produtoPrazoMin={produto.prazoMinimo}
                        produtoPrazoMax={produto.prazoMaximo}
                        produtoDescricao={produto.descricao}
                     />
                  ))

            }

         </section>

      </section>
   )
}

export default ProdutosList
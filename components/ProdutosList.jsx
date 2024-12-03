import { useContext, useState, useEffect } from "react"

import ProdutoCard from "./ProdutoCard"

import { ModalsContext } from "../contexts/ModalsContext"
import { NavigationContext } from "../contexts/NavigationContext"
import { DataContext } from "../contexts/DataContext"

import "../css/components/produtos-list.css"

const ProdutosList = () => {

   const [searchValue, setSearchValue] = useState("")

   const { selectedCategory } = useContext(NavigationContext)
   const { toggleAddProductModal } = useContext(ModalsContext)
   const { sharedProdutos, setSharedProdutos } = useContext(DataContext)

   useEffect(() => {

      async function fetchData() {

         const token = JSON.stringify(localStorage.getItem('loginCredentials')).replace(/"/g, "")

         try {

            const response = await fetch(`https://bauciapi-production.up.railway.app/produto/${selectedCategory.id}`, {
               method: "GET",
               headers: {
                  'Authorization': `Bearer ${token}`
               }
            })

            const fetchedData = await response.json()

            if (response.ok) {
               setSharedProdutos(fetchedData)
            }

         }
         catch (error) {
            console.log("erro: " + error.message)
         }
      }

      fetchData()

   }, [])

   return (
      <section className="produtos-list">

         <header>

            <div className="produtos-list__search-area">

               <div className="produtos-list__input-wrapper">

                  <img src="../src/assets/IconSearch.svg" alt="ícone de busca" />

                  <input
                     type="text"
                     placeholder="Pesquisar produtos"
                     value={searchValue}
                     onChange={(e) => setSearchValue(e.target.value)}
                  />

                  {
                     searchValue !== "" && (
                        <button onClick={() => setSearchValue("")}>
                           <img src="../src/assets/iconX.svg" alt="ícone de X" />
                        </button>
                     )
                  }

               </div>


            </div>

            <button className="produtos-list__add-produto-btn" onClick={toggleAddProductModal}>

               <span>Adicionar Produto</span>

               <img
                  src="../src/assets/IconPlus.svg"
                  alt="ícone de '+'"
               />

            </button>

         </header>

         <section className="produtos-list__produtos-wrapper">

            {

               searchValue !== "" ?

                  sharedProdutos.map(produto => produto.nome.toLowerCase().includes(searchValue.toLowerCase()) && (
                     <ProdutoCard
                        produtoImg={produto.imagem}
                        produtoNome={produto.nome}
                        produtoPrazoMin={produto.prazominimo}
                        produtoPrazoMax={produto.prazomaximo}
                        produtoDescricao={produto.descricao}
                        produtoId={produto.produtoid}
                     />
                  ))

                  :

                  sharedProdutos.map(produto => (
                     <ProdutoCard
                        produtoImg={produto.imagem}
                        produtoNome={produto.nome}
                        produtoPrazoMin={produto.prazominimo}
                        produtoPrazoMax={produto.prazomaximo}
                        produtoDescricao={produto.descricao}
                        produtoId={produto.produtoid}
                     />
                  ))

            }

         </section>

      </section>
   )
}

export default ProdutosList
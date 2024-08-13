import ProdutoCard from "./ProdutoCard"

import TomateImg from "../assets/tomateImg.svg"

import "../css/components/produtos-list.css"

const ProdutosList = () => {
   return (
      <section className="produtos-list">

         <header>

            <div className="produtos-list__search-area">

               <input type="text" placeholder="Pesquisar produtos" />

               <button>
                  <img src="../assets/IconSearch.svg" alt="ícone de lupa" />
               </button>

            </div>

            <button className="produtos-list__add-produto-btn">

               <span>Adicionar Produto</span>

               <img
                  src="../assets/IconPlus.svg"
                  alt="ícone de '+'"
               />

            </button>

         </header>

         <section className="produtos-list__produtos-wrapper">
            <ProdutoCard
               produtoImg={TomateImg}
               produtoNome="Caixa de Tomate 300 gramas"
               produtoPrazo="0-1"
               produtoDescricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At purus tellus arcu sit nibh consectetur."
            />

            <ProdutoCard
               produtoImg={TomateImg}
               produtoNome="Caixa de Tomate 300 gramas"
               produtoPrazo="0-1"
               produtoDescricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At purus tellus arcu sit nibh consectetur."
            />

            <ProdutoCard
               produtoImg={TomateImg}
               produtoNome="Caixa de Tomate 300 gramas"
               produtoPrazo="0-1"
               produtoDescricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At purus tellus arcu sit nibh consectetur."
            />

            <ProdutoCard
               produtoImg={TomateImg}
               produtoNome="Caixa de Tomate 300 gramas"
               produtoPrazo="0-1"
               produtoDescricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At purus tellus arcu sit nibh consectetur."
            />

            <ProdutoCard
               produtoImg={TomateImg}
               produtoNome="Caixa de Tomate 300 gramas"
               produtoPrazo="0-1"
               produtoDescricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At purus tellus arcu sit nibh consectetur."
            />
         </section>

      </section>
   )
}

export default ProdutosList
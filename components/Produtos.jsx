import ProdutosHeader from "./ProdutosHeader"
import ProdutosList from "./ProdutosList"

import "../css/components/produtos.css"

const Produtos = () => {
   return (
      <section className="produtos">

         <ProdutosHeader />

         <ProdutosList />

      </section>
   )
}

export default Produtos
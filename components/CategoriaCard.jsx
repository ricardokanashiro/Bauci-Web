import "../assets/IconArrowWhite.png"
import "../css/components/categorias.css"

const CategoriaCard = () => {
   return (
      <div className="categoriasCard">
         <h1>Cozinheiro</h1>
         <button className="categoriasCard__btn-gotoprodutos"><img src="../assets/IconArrowWhite.png" alt="Botão que possui um ícone de seta apotando para a direita e que ao ser clicado leva para a página de produtos dentro da categoria escolhida." /></button>
      </div>
   )
}

export default CategoriaCard
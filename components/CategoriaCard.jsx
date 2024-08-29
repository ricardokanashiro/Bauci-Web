import { useContext } from "react"

import { NavigationContext } from "../contexts/NavigationContext"

import "../assets/IconArrowWhite.png"
import "../css/components/categorias.css"

const CategoriaCard = ({ categoria }) => {

   const { setSelectedCategory, setSelectedSection } = useContext(NavigationContext)

   function selectCategory() {
      setSelectedCategory(categoria.nome)
      setSelectedSection("produtos")
   }

   return (
      <div className="categoriasCard">

         <h1>{categoria.nome}</h1>

         <button className="categoriasCard__btn-gotoprodutos" onClick={selectCategory}>
            <img 
               src="../assets/IconArrowWhite.png" 
               alt="Botão que possui um ícone de seta apotando para a direita e que ao ser clicado leva para a página de produtos dentro da categoria escolhida." 
            />
         </button>

      </div>
   )
}

export default CategoriaCard
import CategoriaCard from "./CategoriaCard"
import CategoriasHeader from "./CategoriasHeader"

const Categorias = () => {
   return (
      <div className="sectionwrapper__categorias-page-wrapper">

         <section className="categorias__actions-area">
            <CategoriasHeader/>
         </section>

         <section className="categorias__categorias-lista">
            <CategoriaCard />
         </section>

      </div>
   )
}

export default Categorias
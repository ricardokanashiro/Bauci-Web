import CategoriaCard from "./CategoriaCard"

const Categorias = () => {
   return (
      <div>

         <section className="categorias__actions-area">
            
            <div className="categorias__input-wrapper">
               <input type="text" />
               <button></button>
            </div>

            <button className="adicionar-categoria-btn">
               <span>Adicionar Categoria</span>
               <img src="#" alt="#" />
            </button>

         </section>

         <section className="categorias__categorias-lista">
            <CategoriaCard />
         </section>

      </div>
   )
}

export default Categorias
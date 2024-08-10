import "../css/components/produtos.css"

const Produtos = () => {
   return (
      <section className="produtos">

         <header>

            <h1>Cozinheiro</h1>

            <div className="produtos__actions-area">

               <button>
                  <span>Editar</span>
                  <img src="#" alt="#" />
               </button>

               <button>
                  <span>Deletar</span>
                  <img src="#" alt="#" />
               </button>

            </div>

         </header>

      </section>
   )
}

export default Produtos
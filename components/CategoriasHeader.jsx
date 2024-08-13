import "../css/components/categorias.css"
import "../assets/IconSearch.svg"
import "../assets/IconPlus.svg"

const CategoriasHeader = () => {
    return (
        <>
            <div className="categorias__input-wrapper">
                <input type="text" placeholder="Pesquisar categoria"/>
                <button> <img src="../assets/IconSearch.svg" alt="Ícone de lupa que ao ser clicado permite realizar a pesquisa desejada." /></button>
            </div>

            <button className="adicionar-categoria-btn">
                <span>Adicionar Categoria</span>
                <img className="add-produto-btnícone-branco" src="../assets/IconPlus.svg" alt="#" />
            </button>
        </>
    )
}

export default CategoriasHeader
import { useState, useContext } from "react"

import { ModalsContext } from "../contexts/ModalsContext"
import { DataContext } from "../contexts/DataContext"

import CategoriaCard from "./CategoriaCard"

import "../css/components/categorias.css"

const CategoriasList = () => {

    const [searchValue, setSearchValue] = useState("")

    const { toggleAddCategoryModal } = useContext(ModalsContext)
    const { sharedCategorias } = useContext(DataContext)

    return (
        <section className="Categorias-list">

            <header>

                <div className="categorias-list__input-wrapper">

                    <img src="../src/assets/IconSearch.svg" alt="Ícone de busca" className="categorias-list__icon-search" />

                    <input
                        type="text"
                        placeholder="Pesquisar categoria"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />

                    {
                        searchValue !== "" && (
                            <button onClick={() => setSearchValue("")} className="categorias-list__clean-input-button">
                                <img src="../assets/iconX.svg" alt="ícone de X" />
                            </button>
                        )
                    }

                </div>

                <button className="adicionar-categoria-btn" onClick={toggleAddCategoryModal}>
                    <span>Adicionar Categoria</span>
                    <img className="add-produto-btnícone-branco" src="../src/assets/IconPlus.svg" alt="Ícone de +" />
                </button>

            </header>

            <section className="categorias-list__categorias-wrapper">

                <div className="categoriasLista__Wrapper">

                    {

                        searchValue !== "" ?

                            sharedCategorias.map(categoria => categoria.nome.toLowerCase().includes(searchValue.toLowerCase()) && (
                                <CategoriaCard
                                    categoria={categoria}
                                />
                            ))

                            :

                            sharedCategorias.map(categoria => (
                                <CategoriaCard
                                    categoria={categoria}
                                />
                            ))

                    }

                </div>

            </section>

        </section>
    )
}

export default CategoriasList
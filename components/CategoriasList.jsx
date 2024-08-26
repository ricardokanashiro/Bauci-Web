import { useState } from "react"

import { useContext } from "react"

import { ModalsContext } from "../contexts/ModalsContext"

import CategoriaCard from "./CategoriaCard"

import { categorias } from "../data.js"

import "../css/components/categorias.css"

import "../assets/IconSearch.svg"

import "../assets/IconSearch.svg"

import "../assets/IconPlus.svg"

const CategoriasList = () => {

    const [searchValue, setSearchValue] = useState("");

    const { toggleAddCategoryModal } = useContext(ModalsContext);

    return (
        <section className="Categorias-list">

            <header>

                <div className="categorias-list__input-wrapper">

                    <img src="../assets/IconSearch.svg" alt="Ícone de busca" className="categorias-list__icon-search"/>

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

                <button className="adicionar-categoria-btn"  onClick={toggleAddCategoryModal}>
                    <span>Adicionar Categoria</span>
                    <img className="add-produto-btnícone-branco" src="../assets/IconPlus.svg" alt="Ícone de +" />
                </button>

            </header>

            <section className="categorias-list__categorias-wrapper">

                <div className="categoriasLista__Wrapper">

                    {

                        searchValue !== "" ?

                            categorias.map(categoria => categoria.nome.toLowerCase().includes(searchValue.toLowerCase()) && (
                                <CategoriaCard
                                    categoriaNome={categoria.nome}
                                />
                            ))

                            :

                            categorias.map(categoria => (
                                <CategoriaCard
                                    categoriaNome={categoria.nome}
                                />
                            ))

                    }

                </div>

            </section>

        </section>
    )
}

export default CategoriasList
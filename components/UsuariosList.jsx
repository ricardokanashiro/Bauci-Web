import { useState } from "react"

import "../css/components/usuarios.css"

import { usuarios } from "../data.js"

import UsuarioCard from "./UsuarioCard"

import "../assets/IconSearch.svg"

import "../assets/IconSearch.svg"

import "../assets/IconPlus.svg"

const UsuariosList = () => {

    const [searchValue, setSearchValue] = useState("");

    return (
        <section className="Usuarios-list">


            <header>

                <div className="usuarios-list__input-wrapper">

                    <img src="../assets/IconSearch.svg" alt="Ícone de busca" className="usuarios-list__icon-search" />

                    <input
                        type="text"
                        placeholder="Pesquisar usuário"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />

                    {
                        searchValue !== "" && (
                            <button onClick={() => setSearchValue("")} className="usuarios-list__clean-input-button">
                                <img src="../assets/iconX.svg" alt="ícone de X" />
                            </button>
                        )
                    }

                </div>

                <button className="adicionar-usuario-btn">
                    <span>Adicionar Usuário</span>
                    <img className="add-produto-btnícone-branco" src="../assets/IconPlus.svg" alt="Ícone de +" />
                </button>

            </header>

            <section className="usuarios-list__categorias-wrapper">

                <div className="usuarios-list__Wrapper">

                    {

                        searchValue !== "" ?

                            usuarios.map(usuario => usuario.nome.toLowerCase().includes(searchValue.toLowerCase()) && (
                                <UsuarioCard
                                    usuarioNome={usuario.nome}
                                    usuarioLogin={usuario.login}
                                    usuarioSenha={usuario.senha}
                                    usuarioCategoria={usuario.categoria}
                                />
                            ))

                            :

                            usuarios.map(usuario => (
                                <UsuarioCard
                                    usuarioNome={usuario.nome}
                                    usuarioLogin={usuario.login}
                                    usuarioSenha={usuario.senha}
                                    usuarioCategoria={usuario.categoria}
                                />
                            ))

                    }

                </div>

            </section>

        </section>
    )
}

export default UsuariosList
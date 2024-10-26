import { useContext, useState } from "react"

import "../css/components/usuarios.css"

import UsuarioCard from "./UsuarioCard"

import { ModalsContext } from "../contexts/ModalsContext.jsx"
import { DataContext } from "../contexts/DataContext.jsx"

import "../assets/IconSearch.svg"
import "../assets/IconSearch.svg"
import "../assets/IconPlus.svg"

const UsuariosList = () => {

    const [searchValue, setSearchValue] = useState("")

    const { toggleAddUserModal } = useContext(ModalsContext)
    const { sharedUsers } = useContext(DataContext)

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

                <button className="adicionar-usuario-btn" onClick={toggleAddUserModal}>
                    <span>Adicionar Usuário</span>
                    <img className="add-produto-btnícone-branco" src="../assets/IconPlus.svg" alt="Ícone de +" />
                </button>

            </header>

            <section className="usuarios-list__categorias-wrapper">

                <div className="usuarios-list__Wrapper">

                    {

                        searchValue !== "" ?

                            sharedUsers.map(usuario => usuario.nome.toLowerCase().includes(searchValue.toLowerCase()) && (
                                <UsuarioCard
                                    usuarioNome={usuario.nome}
                                    usuarioLogin={usuario.login}
                                    usuarioCategoria={usuario.categoria}
                                    usuarioId={usuario.id}
                                />
                            ))

                            :

                            sharedUsers.map(usuario => (
                                <UsuarioCard
                                    usuarioNome={usuario.nome}
                                    usuarioLogin={usuario.login}
                                    usuarioCategoria={usuario.categoria}
                                    usuarioId={usuario.id}
                                />
                            ))

                    }

                </div>

            </section>

        </section>
    )
}

export default UsuariosList
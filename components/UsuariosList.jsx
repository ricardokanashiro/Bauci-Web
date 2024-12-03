import { useContext, useEffect, useState } from "react"

import "../css/components/usuarios.css"

import UsuarioCard from "./UsuarioCard"

import { ModalsContext } from "../contexts/ModalsContext.jsx"
import { DataContext } from "../contexts/DataContext.jsx"

const UsuariosList = () => {

    const [searchValue, setSearchValue] = useState("")

    const { toggleAddUserModal } = useContext(ModalsContext)
    const { sharedUsers, setSharedUsers } = useContext(DataContext)

    useEffect(() => {

        const fetchDataFunc = async () => {

            const token = JSON.stringify(localStorage.getItem('loginCredentials')).replace(/"/g, "")
   
            if (token) {
               try {
                  const response = await fetch(`https://bauciapi-production.up.railway.app/usuario`, {
                     method: "GET",
                     headers: {
                        'Authorization': `Bearer ${token}`,
                     },
                  })
   
                  const fetchedData = await response.json()
   
                  setSharedUsers(fetchedData)
               }
               catch (error) {
                  console.log("erro: " + error.message)
               }
   
            }
         }
   
         fetchDataFunc()

    }, [])

    return (
        <section className="Usuarios-list">


            <header>

                <div className="usuarios-list__input-wrapper">

                    <img src="/assets/IconSearch.svg" alt="Ícone de busca" className="usuarios-list__icon-search" />

                    <input
                        type="text"
                        placeholder="Pesquisar usuário"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />

                    {
                        searchValue !== "" && (
                            <button onClick={() => setSearchValue("")} className="usuarios-list__clean-input-button">
                                <img src="/assets/iconX.svg" alt="ícone de X" />
                            </button>
                        )
                    }

                </div>

                <button className="adicionar-usuario-btn" onClick={toggleAddUserModal}>
                    <span>Adicionar Usuário</span>
                    <img className="add-produto-btnícone-branco" src="/assets/IconPlus.svg" alt="Ícone de +" />
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
                                    categoriaId={usuario.categoriaid}
                                />
                            ))

                            :

                            sharedUsers.map(usuario => (
                                <UsuarioCard
                                    usuarioNome={usuario.nome}
                                    usuarioLogin={usuario.login}
                                    usuarioCategoria={usuario.categoria}
                                    usuarioId={usuario.id}
                                    categoriaId={usuario.categoriaid}
                                />
                            ))

                    }

                </div>

            </section>

        </section>
    )
}

export default UsuariosList
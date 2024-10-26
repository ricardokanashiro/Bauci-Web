import { useContext, useState } from "react"

import { ModalsContext } from "../contexts/ModalsContext"
import { DataContext } from "../contexts/DataContext"

import notify from "../utils/notify"

import "../assets/IconArrowDownGray.svg"

import "../css/components/usuarios.css"

const AddUserModal = () => {

    const { toggleAddUserModal } = useContext(ModalsContext)
    const { setSharedUsers, sharedCategorias } = useContext(DataContext)

    const [categoriaMenuActive, setCategoriaMenuActive] = useState(false)
    const [newUser, setNewUser] = useState({ nome: "", login: "", senha: "", categoria: "" })

    function addUser() {
        setSharedUsers(prev => [newUser, ...prev])
        notify(`Usuário ${newUser.nome} adicionado com sucesso!`)
        toggleAddUserModal()
    }

    return (
        <div className="add-user-modal">

            <header className="add-user-modal__header">
                <h2>Adicionar Usuário</h2>

                <button onClick={toggleAddUserModal}>
                    <img src="../assets/iconXGray.svg" alt="ícone de x" />
                </button>
            </header>

            <div className="add-user-modal__input-wrapper">

                <input
                    className="add-user-modal__classic-input"
                    type="text"
                    placeholder="Nome do usuário"
                    onChange={(e) => setNewUser(prev => ({ ...prev, nome: e.target.value }))}
                    value={newUser.nome}
                />

                <input className="add-user-modal__classic-input" type="text" placeholder="Login do usuário" />

                <input className="add-user-modal__classic-input" type="text" placeholder="Senha do usuário" />

                <div className="add-user-modal__input-category-wrapper">

                    <input className="add-user-modal__category-input" type="text" placeholder="Categoria" disabled value={newUser.categoria} />

                    <button
                        className="add-user-modal__arrow-dropdown-menu"
                        onClick={() => setCategoriaMenuActive(prev => !prev)}
                    >
                        <img src="../assets/IconArrowDownGray.svg" alt="Ícone de seta apontando para baixo" />
                    </button>

                    {
                        categoriaMenuActive && (
                            <div className="add-user-modal__dropdown-category-menu">

                                {
                                    sharedCategorias.map(categoria => (
                                        <button onClick={() => setSelectedCategoria(categoria.nome)}>
                                            <p>{categoria.nome}</p>
                                        </button>
                                    ))
                                }

                            </div>
                        )
                    }

                </div>

                <p className="add-user-modal__error-message">O campo deve ser preenchido!</p>
            </div>

            <button className="add-user-modal__apply-btn" onClick={addUser}>Adicionar</button>
        </div>
    )
}

export default AddUserModal
import { useContext, useState } from "react"

import { ModalsContext } from "../contexts/ModalsContext"
import { DataContext } from "../contexts/DataContext"

import "../assets/IconArrowDownGray.svg"

import "../css/components/usuarios.css"

import notify from "../utils/notify"

import { categorias } from "../data"

const EditUserModal = () => {

    const { toggleEditUserModal, toEditUser } = useContext(ModalsContext)
    const { setSharedUsers } = useContext(DataContext)

    const [categoriaMenuActive, setCategoriaMenuActive] = useState(false)

    const [editedUser, setEditedUser] = useState({ 
        nome: toEditUser.nome, 
        login: toEditUser.login, 
        categoria: toEditUser.categoria,
        senha: ""
    })

    function editUser()
    {
        setSharedUsers(prev => prev.map(user => user.id === toEditUser.id ? {...editedUser, id: toEditUser.id} : user))
        toggleEditUserModal()
        notify(`Usuário ${toEditUser.nome} editado com sucesso!`)
    }

    return (
            <div className="edit-user-modal">

                <header className="edit-user-modal__header">
                    <h2>Editar Usuário</h2>

                    <button onClick={toggleEditUserModal}>
                        <img src="../assets/iconXGray.svg" alt="ícone de x" />
                    </button>
                </header>

                <div className="edit-user-modal__input-wrapper">

                    <input 
                        className="edit-user-modal__classic-input" 
                        type="text" 
                        placeholder="Nome do usuário"
                        value={editedUser.nome}
                        onChange={e => setEditedUser(prev => ({...prev, nome: e.target.value}))}
                    />

                    <input 
                        className="edit-user-modal__classic-input" 
                        type="text" 
                        placeholder="Login do usuário"
                        value={editedUser.login}
                        onChange={e => setEditedUser(prev => ({...prev, login: e.target.value}))}
                    />

                    <input 
                        className="edit-user-modal__classic-input" 
                        type="password" 
                        placeholder="Senha do usuário"
                        onChange={e => setEditedUser(prev => ({...prev, senha: e.target.value}))}
                    />

                    <div className="edit-user-modal__input-category-wrapper">

                        <input className="edit-user-modal__category-input" type="text" placeholder="Categoria" disabled value={editedUser.categoria} />

                        <button
                            className="edit-user-modal__arrow-dropdown-menu" 
                            onClick={() => setCategoriaMenuActive(prev => !prev)}
                        >
                            <img src="../assets/IconArrowDownGray.svg" alt="Ícone de seta apontando para baixo" />
                        </button>

                        {
                            
                        categoriaMenuActive && (

                            <div className="edit-user-modal__dropdown-category-menu">

                            {
                                    categorias.map(categoria => (
                                        <button 
                                            onClick={() => {
                                                setEditedUser(prev => ({...prev, categoria: categoria.nome}))
                                                setCategoriaMenuActive(false)
                                            }}
                                        >
                                            <p>{categoria.nome}</p>
                                        </button>
                                    ))
                                }

                            </div>
                        )
                    }

                    </div>

                </div>

                <button className="edit-user-modal__apply-btn" onClick={editUser}>
                    Aplicar
                </button>
            </div>
    )
}

export default EditUserModal
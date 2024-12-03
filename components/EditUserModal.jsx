import { useContext, useState } from "react"

import { CircularProgress } from "@mui/material"

import { ModalsContext } from "../contexts/ModalsContext"
import { DataContext } from "../contexts/DataContext"

import "../css/components/usuarios.css"

import notify, { notifyError } from "../utils/notify"

const EditUserModal = () => {

    const { toggleEditUserModal, toEditUser } = useContext(ModalsContext)
    const { setSharedUsers, sharedCategorias } = useContext(DataContext)

    const [categoriaMenuActive, setCategoriaMenuActive] = useState(false)
    const [isLoading, setisLoading] = useState(false)

    const [editedUser, setEditedUser] = useState({
        nome: toEditUser.nome,
        login: toEditUser.login,
        categoria: toEditUser.categoria,
        senha: ""
    })

    const [errorOnEdit, setErrorOnEdit] = useState({
        nomeError: "",
        loginError: "",
        senhaError: "",
        categoriaError: ""
    })

    async function editUser() {

        let thereIsError

        setisLoading(true)

        if(!editedUser.nome) {
            setErrorOnEdit(prev => ({ ...prev, nomeError: "Este campo deve ser preenchido!" }))
            thereIsError = true
        }

        if(!editedUser.senha) {
            setErrorOnEdit(prev => ({ ...prev, senhaError: "Este campo deve ser preenchido!" }))
            thereIsError = true
        }

        if(!editedUser.login) {
            setErrorOnEdit(prev => ({ ...prev, loginError: "Este campo deve ser preenchido!" }))
            thereIsError = true
        }

        if(!editedUser.categoria.nome) {
            setErrorOnEdit(prev => ({ ...prev, categoriaError: "Este campo deve ser preenchido!" }))
            thereIsError = true
        }

        if(thereIsError) {
            setisLoading(false)
            return
        }

        const token = JSON.stringify(localStorage.getItem('loginCredentials')).replace(/"/g, "")

        try {

            const response = await fetch(`https://bauciapi-production.up.railway.app/usuario/${toEditUser.id}`, {
                method: "PUT",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: editedUser.nome,
                    senha: editedUser.senha,
                    login: editedUser.login,
                    categoriaId: editedUser.categoria.id
                })
            })

            const fetchedData = await response.json()

            if (response.ok) {

                setSharedUsers(fetchedData)
                toggleEditUserModal()
                notify(`Usuário ${toEditUser.nome} editado com sucesso!`)
            } else {
                notifyError(fetchedData.error)
            }

            setisLoading(false)

        }
        catch (error) {
            setisLoading(false)
            console.log("erro: " + error.message)
        }
    }

    return (
        <div className="edit-user-modal">

            <header className="edit-user-modal__header">
                <h2>Editar Usuário</h2>

                <button onClick={toggleEditUserModal}>
                    <img src="../src/assets/iconXGray.svg" alt="ícone de x" />
                </button>
            </header>

            <div className="edit-user-modal__classic-input-wrapper">

                <input
                    className="edit-user-modal__classic-input"
                    type="text"
                    placeholder="Nome do usuário"
                    value={editedUser.nome}
                    onChange={e => setEditedUser(prev => ({ ...prev, nome: e.target.value }))}
                />
            </div>

            {
                errorOnEdit.nomeError &&
                    <p className="edit-user-modal__error-message">Este campo deve ser preenchido!</p>
            }

            <div className="edit-user-modal__classic-input-wrapper">

                <input
                    className="edit-user-modal__classic-input"
                    type="text"
                    placeholder="Login do usuário"
                    value={editedUser.login}
                    onChange={e => setEditedUser(prev => ({ ...prev, login: e.target.value }))}
                />
            </div>

            {
                errorOnEdit.loginError &&
                    <p className="edit-user-modal__error-message">Este campo deve ser preenchido!</p>
            }

            <div className="edit-user-modal__classic-input-wrapper">

                <input
                    className="edit-user-modal__classic-input"
                    type="password"
                    placeholder="Senha do usuário"
                    onChange={e => setEditedUser(prev => ({ ...prev, senha: e.target.value }))}
                />

            </div>

            {
                errorOnEdit.senhaError &&
                    <p className="edit-user-modal__error-message">Este campo deve ser preenchido!</p>
            }

            <div className="edit-user-modal__input-category-wrapper">

                <input className="edit-user-modal__category-input" type="text" placeholder="Categoria" disabled value={editedUser.categoria.nome} />

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
                                sharedCategorias.map(categoria => (
                                    <button
                                        onClick={() => {
                                            setEditedUser(prev => ({ ...prev, categoria: categoria }))
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

            {
                errorOnEdit.categoriaError &&
                    <p className="edit-user-modal__error-message">Este campo deve ser preenchido!</p>
            }

            <button className="edit-user-modal__apply-btn" onClick={editUser}>
                { isLoading ? <CircularProgress color="#FFF" size="1.5rem" /> : "Aplicar" }
            </button>
        </div>
    )
}

export default EditUserModal
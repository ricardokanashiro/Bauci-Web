import { useContext, useEffect, useState } from "react"

import { ModalsContext } from "../contexts/ModalsContext"
import { DataContext } from "../contexts/DataContext"

import { CircularProgress } from "@mui/material"

import notify, { notifyError } from "../utils/notify"

import "../css/components/usuarios.css"

const AddUserModal = () => {

    const { toggleAddUserModal } = useContext(ModalsContext)
    const { setSharedUsers, sharedCategorias, setSharedCategorias } = useContext(DataContext)

    const [categoriaMenuActive, setCategoriaMenuActive] = useState(false)
    const [newUser, setNewUser] = useState({ nome: "", login: "", senha: "", categoria: { id: "", nome: "" } })

    const [errorOnAdd, setErrorOnAdd] = useState({
        nomeError: "",
        loginError: "",
        senhaError: "",
        categoriaError: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        const fetchDataFunc = async () => {

            const token = JSON.stringify(localStorage.getItem('loginCredentials')).replace(/"/g, "")

            if(!token) {
                throw new Error("Token inválido!")
            }

            if(typeof token !== "string") {
                throw new Error("Tipo do token inválido!")
            }

            if (token) {

                try {

                    const response = await fetch(`https://bauciapi-production.up.railway.app/categoria`, {
                        method: "GET",
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        },
                    })

                    const fetchedData = await response.json()

                    setSharedCategorias(fetchedData)
                }
                catch (error) {
                    console.log("erro: " + error.message)
                }

            }
        }

        fetchDataFunc()

    }, [])

    async function addUser() {

        setIsLoading(true)

        let thereIsError

        setErrorOnAdd({})

        if(!newUser.nome)  {
            setErrorOnAdd(prev => ({ ...prev, nomeError: "Este campo deve ser preenchido!" }))
            thereIsError = true
        }

        if(!newUser.senha)  {
            setErrorOnAdd(prev => ({ ...prev, senhaError: "Este campo deve ser preenchido!" }))
            thereIsError = true
        }

        if(!newUser.categoria.nome)  {
            setErrorOnAdd(prev => ({ ...prev, categoriaError: "Este campo deve ser preenchido!" }))
            thereIsError = true
        }

        if(!newUser.login)  {
            setErrorOnAdd(prev => ({ ...prev, loginError: "Este campo deve ser preenchido!" }))
            thereIsError = true
        }

        if(thereIsError) {
            setIsLoading(false)
            return
        }

        const token = JSON.stringify(localStorage.getItem('loginCredentials')).replace(/"/g, "")

        try {

            const response = await fetch(`https://bauciapi-production.up.railway.app/usuario`, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: newUser.nome,
                    login: newUser.login,
                    senha: newUser.senha,
                    categoriaID: newUser.categoria.id
                })
            })

            const fetchedData = await response.json()

            if (response.ok) {

                setSharedUsers(fetchedData)
                notify(`Usuário ${newUser.nome} adicionado com sucesso!`)
                toggleAddUserModal()

            } else {
                notifyError(fetchedData.error)
            }

            setIsLoading(false)
        }
        catch (error) {
            setIsLoading(false)
            console.log("erro: " + error.message)
        }
    }

    return (
        <div className="add-user-modal">

            <header className="add-user-modal__header">

                <h2>Adicionar Usuário</h2>

                <button onClick={toggleAddUserModal}>
                    <img src="/assets/iconXGray.svg" alt="ícone de x" />
                </button>

            </header>

            <div className="add-user-modal__classic-input-wrapper">

                <input
                    className="add-user-modal__classic-input"
                    type="text"
                    placeholder="Nome do usuário"
                    onChange={(e) => setNewUser(prev => ({ ...prev, nome: e.target.value }))}
                    value={newUser.nome}
                />

            </div>

            {
                errorOnAdd.nomeError &&
                    <p className="add-user-modal__error-message">Este campo deve ser preenchido!</p>
            }

            <div className="add-user-modal__classic-input-wrapper">

                <input
                    className="add-user-modal__classic-input"
                    type="text"
                    placeholder="Login do usuário"
                    onChange={(e) => setNewUser(prev => ({ ...prev, login: e.target.value }))}
                />

            </div>

            {
                errorOnAdd.loginError &&
                    <p className="add-user-modal__error-message">Este campo deve ser preenchido!</p>
            }

            <div className="add-user-modal__classic-input-wrapper">

                <input
                    className="add-user-modal__classic-input"
                    type="text"
                    placeholder="Senha do usuário"
                    onChange={(e) => setNewUser(prev => ({ ...prev, senha: e.target.value }))}
                />

            </div>

            {
                errorOnAdd.senhaError &&
                    <p className="add-user-modal__error-message">Este campo deve ser preenchido!</p>
            }

            <div className="add-user-modal__input-category-wrapper">

                <input className="add-user-modal__category-input" type="text" placeholder="Categoria" disabled value={newUser.categoria.nome} />

                <button
                    className="add-user-modal__arrow-dropdown-menu"
                    onClick={() => setCategoriaMenuActive(prev => !prev)}
                >
                    <img src="/assets/IconArrowDownGray.svg" alt="Ícone de seta apontando para baixo" />
                </button>

                {
                    categoriaMenuActive && (
                        <div className="add-user-modal__dropdown-category-menu">

                            {
                                sharedCategorias.map(categoria => (
                                    <button
                                        onClick={() => {
                                            setNewUser(prev => ({ ...prev, categoria }))
                                            setCategoriaMenuActive(false)
                                        }}>
                                        <p>{categoria.nome}</p>
                                    </button>
                                ))
                            }

                        </div>
                    )
                }
            </div>

            {
                errorOnAdd.categoriaError &&
                    <p className="add-user-modal__error-message">Este campo deve ser preenchido!</p>
            }

            <button className="add-user-modal__apply-btn" onClick={addUser}>
                { isLoading ? <CircularProgress color="#FFF" size="1.5rem" /> : "Aplicar" }
            </button>
        </div>
    )
}

export default AddUserModal
import { useContext, useState } from "react"

import { ModalsContext } from "../contexts/ModalsContext"

import "../assets/IconArrowDownGray.svg"

import "../css/components/usuarios.css"

import { categorias } from "../data"

const EditUserModal = () => {

    const { toggleEditUserModal } = useContext(ModalsContext)

    const [categoriaMenuActive, setCategoriaMenuActive] = useState(false)
    const [selectedCategoria, setselectedCategoria] = useState("")

    return (
        <div className="edit-user-modal">

            <header className="edit-user-modal__header">
                <h2>Editar Usuário</h2>

                <button onClick={toggleEditUserModal}>
                    <img src="../assets/iconXGray.svg" alt="ícone de x" />
                </button>
            </header>

            <div className="edit-user-modal__input-wrapper">

                <div className="edit-user-modal__error-message-wrapper">
                    <div className="edit-user-modal__classic-input-wrapper">
                        <input
                            className="edit-user-modal__classic-input"
                            type="text"
                            placeholder="Nome do usuário"
                        />
                        <p>1/20</p>
                    </div>

                    <p className="edit-user-modal__error-message">O campo deve ser preenchido!</p>
                </div>

                <div className="edit-user-modal__error-message-wrapper">
                    <div className="edit-user-modal__classic-input-wrapper">
                        <input
                            className="edit-user-modal__classic-input"
                            type="text"
                            placeholder="Login do usuário"
                        />

                        <p>1/20</p>
                    </div>

                    <p className="edit-user-modal__error-message">O campo deve ser preenchido!</p>
                </div>

                <div className="edit-user-modal__error-message-wrapper">
                    <div className="edit-user-modal__classic-input-wrapper">
                        <input
                            className="edit-user-modal__classic-input"
                            type="text"
                            placeholder="Senha do usuário"
                        />
                        <p>1/20</p>
                    </div>

                    <p className="edit-user-modal__error-message">O campo deve ser preenchido!</p>
                </div>

                <div className="edit-user-modal__error-message-wrapper">

                    <div className="edit-user-modal__input-category-wrapper">

                        <input className="edit-user-modal__category-input" type="text" placeholder="Categoria" disabled value={selectedCategoria} />

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
                                                    setselectedCategoria(categoria.nome)
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

                    <p className="edit-user-modal__error-message">O campo deve ser preenchido!</p>
                </div>

            </div>

            <button className="edit-user-modal__apply-btn">Aplicar</button>
        </div >
    )
}

export default EditUserModal
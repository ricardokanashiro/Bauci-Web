import { useContext, useState } from "react"

import { ModalsContext } from "../contexts/ModalsContext"

import "../assets/IconArrowDownGray.svg"

import "../css/components/usuarios.css"

const AddUserModal = () => {

    const { toggleAddUserModal } = useContext(ModalsContext)

    const [categoriaMenuActive, setCategoriaMenuActive] = useState(false)
    const [selectedCategoria, setSelectedCategoria] = useState("")

    return (
            <div className="add-user-modal">

                <header className="add-user-modal__header">
                    <h2>Adicionar Usuário</h2>

                    <button onClick={toggleAddUserModal}>
                        <img src="../assets/iconXGray.svg" alt="ícone de x" />
                    </button>
                </header>

                <div className="add-user-modal__input-wrapper">

                    <input className="add-user-modal__classic-input" type="text" placeholder="Nome do usuário" />

                    <input className="add-user-modal__classic-input" type="text" placeholder="Login do usuário" />

                    <input className="add-user-modal__classic-input" type="text" placeholder="Senha do usuário" />

                    <div className="add-user-modal__input-category-wrapper">

                        <input className="add-user-modal__category-input" type="text" placeholder="Categoria" disabled value={selectedCategoria} />

                        <button 
                            className="add-user-modal__arrow-dropdown-menu"
                            onClick={() => setCategoriaMenuActive(prev => !prev)}
                        >
                            <img src="../assets/IconArrowDownGray.svg" alt="Ícone de seta apontando para baixo" />
                        </button>

                    </div>

                    {
                        categoriaMenuActive && (
                            <div className="add-user-modal__dropdown-category-menu">

                                <button onClick={() => setSelectedCategoria("Cozinheiro")}>
                                    <p>Cozinheiro</p>
                                </button>

                                <button onClick={() => setSelectedCategoria("Outro Cozinheiro")}>
                                    <p>Outro Cozinheiro</p>
                                </button>

                                <button onClick={() => setSelectedCategoria("Atendente")}>
                                    <p>Atendente</p>
                                </button>

                            </div>
                        )
                    }

                </div>

                <button className="add-user-modal__apply-btn">Adicionar</button>
            </div>
    )
}

export default AddUserModal
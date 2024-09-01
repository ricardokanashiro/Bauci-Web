import "../assets/IconArrowDownGray.svg"

import "../css/components/usuarios.css"

const EditUserModal = () => {

    return (
            <div className="edit-user-modal">

                <header className="edit-user-modal__header">
                    <h2>Editar Usuário</h2>

                    <button>
                        <img src="../assets/iconXGray.svg" alt="ícone de x" />
                    </button>
                </header>

                <div className="edit-user-modal__input-wrapper">

                    <input className="edit-user-modal__classic-input" type="text" placeholder="Nome do usuário" />

                    <input className="edit-user-modal__classic-input" type="text" placeholder="Login do usuário" />

                    <input className="edit-user-modal__classic-input" type="text" placeholder="Senha do usuário" />

                    <div className="edit-user-modal__input-category-wrapper">

                        <input className="edit-user-modal__category-input" type="text" placeholder="Categoria" disabled/>

                        <button className="edit-user-modal__arrow-dropdown-menu">
                            <img src="../assets/IconArrowDownGray.svg" alt="Ícone de seta apontando para baixo" />
                        </button>

                    </div>

                    <div className="edit-user-modal__dropdown-category-menu">
                        <p>Cozinheiro</p>
                        <p>Outro Cozinheiro</p>
                        <p>Atendente</p>
                    </div>

                </div>

                <button className="edit-user-modal__apply-btn">Aplicar</button>
            </div>
    )
}

export default EditUserModal
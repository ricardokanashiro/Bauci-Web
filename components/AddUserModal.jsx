import "../assets/IconArrowDownGray.svg"

const AddUserModal = () => {

    return (
            <div className="add-user-modal">

                <header className="add-user-modal__header">
                    <h2>Adicionar Usuário</h2>

                    <button>
                        <img src="../assets/iconXGray.svg" alt="ícone de x" />
                    </button>
                </header>

                <div className="add-user-modal__input-wrapper">

                    <input className="add-user-modal__classic-input" type="text" placeholder="Nome do usuário" />

                    <input className="add-user-modal__classic-input" type="text" placeholder="Login do usuário" />

                    <input className="add-user-modal__classic-input" type="text" placeholder="Senha do usuário" />

                    <div className="add-user-modal__input-category-wrapper">

                        <input className="add-user-modal__category-input" type="text" placeholder="Categoria" disabled/>

                        <button className="add-user-modal__arrow-dropdown-menu">
                            <img src="../assets/IconArrowDownGray.svg" alt="Ícone de seta apontando para baixo" />
                        </button>

                    </div>

                    <div className="add-user-modal__dropdown-category-menu">
                        <p>Cozinheiro</p>
                        <p>Outro Cozinheiro</p>
                        <p>Atendente</p>
                    </div>

                </div>

                <button className="add-user-modal__apply-btn">Adicionar</button>
            </div>
    )
}

export default AddUserModal
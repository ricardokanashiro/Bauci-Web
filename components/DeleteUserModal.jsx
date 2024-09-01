import "../css/components/usuarios.css"

const DeleteUserModal = () => {
 
    return (
       <div className="delete-user-modal">
          <h2>Deletar Usuário?</h2>
 
          <p>
             Tem certeza de que deseja deletar o usuário "Gabriella Melo"? Após essa ação não será possível recuperá-lo.
          </p>
 
          <div className="delete-user-modal__buttons-area">
             <button className="delete-user-modal__cancelar-btn">Cancelar</button>
             <button className="delete-user-modal__deletar-btn">Deletar</button>
          </div>
       </div>
    )
 }
 
 export default DeleteUserModal
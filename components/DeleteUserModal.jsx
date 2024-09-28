import { useContext } from "react"

import { ModalsContext } from "../contexts/ModalsContext"

import "../css/components/usuarios.css"

const DeleteUserModal = () => {

   const { toggleDeleteUserModal, toDeleteUser } = useContext(ModalsContext)

   function deleteUser() {
      
   }
 
    return (
       <div className="delete-user-modal">
          <h2>Deletar Usuário?</h2>
 
          <p>
             Tem certeza de que deseja deletar o usuário "{toDeleteUser}"? Após essa ação não será possível recuperá-lo.
          </p>
 
          <div className="delete-user-modal__buttons-area">
             <button className="delete-user-modal__cancelar-btn" onClick={toggleDeleteUserModal}>Cancelar</button>
             <button className="delete-user-modal__deletar-btn">Deletar</button>
          </div>
       </div>
    )
 }
 
 export default DeleteUserModal
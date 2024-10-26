import { useContext } from "react"

import { ModalsContext } from "../contexts/ModalsContext"
import { DataContext } from "../contexts/DataContext"

import notify from "../utils/notify"

import "../css/components/usuarios.css"

const DeleteUserModal = () => {

   const { toggleDeleteUserModal, toDeleteUser } = useContext(ModalsContext)
   const { setSharedUsers } = useContext(DataContext)

   function deleteUser() 
   {
      setSharedUsers(prev => prev.filter(user => user.id !== toDeleteUser.id))
      notify(`Usuário ${toDeleteUser.nome} excluído com sucesso!`)
   }
 
    return (
       <div className="delete-user-modal">
          <h2>Deletar Usuário?</h2>
 
          <p>
             Tem certeza de que deseja deletar o usuário "{toDeleteUser.nome}"? Após essa ação não será possível recuperá-lo.
          </p>
 
          <div className="delete-user-modal__buttons-area">
             <button className="delete-user-modal__cancelar-btn" onClick={toggleDeleteUserModal}>Cancelar</button>
             <button className="delete-user-modal__deletar-btn" onClick={() => { deleteUser(); toggleDeleteUserModal()}}>Deletar</button>
          </div>
       </div>
    )
 }
 
 export default DeleteUserModal
import { useContext, useState } from "react"

import { CircularProgress } from "@mui/material"

import { ModalsContext } from "../contexts/ModalsContext"
import { DataContext } from "../contexts/DataContext"

import notify from "../utils/notify"

import "../css/components/usuarios.css"

const DeleteUserModal = () => {

   const { toggleDeleteUserModal, toDeleteUser } = useContext(ModalsContext)
   const { setSharedUsers } = useContext(DataContext)

   const [isLoading, setIsLoading] = useState(false)

   async function deleteUser() {

      setIsLoading(true)

      const token = JSON.stringify(localStorage.getItem('loginCredentials')).replace(/"/g, "")

      try {

         const response = await fetch(`https://bauciapi-production.up.railway.app/usuario/${toDeleteUser.id}`, {
            method: "DELETE",
            headers: {
               'Authorization': `Bearer ${token}`
            }
         })

         const fetchedData = await response.json()

         if (response.ok) {
            setSharedUsers(fetchedData)
            notify(`Usuário ${toDeleteUser.nome} excluído com sucesso!`)
            toggleDeleteUserModal()
         }

         setIsLoading(false)

      }
      catch (error) {
         setIsLoading(false)
         console.log("erro: " + error.message)
      }
   }

   return (
      <div className="delete-user-modal">

         <h2>Deletar Usuário?</h2>

         <p>
            Tem certeza de que deseja deletar o usuário "{toDeleteUser.nome}"? Após essa ação não será possível recuperá-lo.
         </p>

         <div className="delete-user-modal__buttons-area">

            <button className="delete-user-modal__cancelar-btn" onClick={toggleDeleteUserModal}>Cancelar</button>

            <button className="delete-user-modal__deletar-btn" onClick={() => { deleteUser() }}>
               { isLoading ? <CircularProgress color="#FFF" size="1.5rem" /> :  "Deletar" }
            </button>

         </div>
      </div>
   )
}

export default DeleteUserModal
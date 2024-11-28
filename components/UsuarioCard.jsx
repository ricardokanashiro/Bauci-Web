import { useContext } from "react"

import { ModalsContext } from "../contexts/ModalsContext"

import "../assets/IconArrowWhite.png"
import "../css/components/usuarios.css"

const UsuarioCard = ({ usuarioNome, usuarioLogin, usuarioCategoria, usuarioId, categoriaId }) => {

   const { toggleEditUserModal, toggleDeleteUserModal, setToEditUser, setToDeleteUser } = useContext(ModalsContext)

   return (

      <div className="usuariosCard">
         <div className="usuarios-card__user-info-wrapper">
            <h1>{usuarioNome}</h1>

            <div className="usuarios-card__login-passw-wrapper">

               <div className="usuarios-card__login-wrapper">
                  <h3>Login: </h3>
                  <div className="usuarios-card__login-name-wrapper">
                     <h4>{usuarioLogin}</h4>
                  </div>
               </div>

            </div>

            <div className="usuarios-card__category-wrapper">
               <h3>Categorias: </h3>
               <div className="usuarios-card__category-name-wrapper">
                  <h4>{usuarioCategoria}</h4>
               </div>
            </div>

         </div>

         <div className="usuarios-card__edit-delete-button-wrapper">

            <button 
               className="usuarios-card__edit-button" 
               onClick={() => {
                  toggleEditUserModal()
                  setToEditUser({ nome: usuarioNome, login: usuarioLogin, categoria: {id: categoriaId, nome: usuarioCategoria}, id: usuarioId })
               }}
            >
               Editar
            </button>

            <button 
               className="usuarios-card__delete-button"
               onClick={() => {
                  toggleDeleteUserModal()
                  setToDeleteUser({ id: usuarioId, nome: usuarioNome })
               }}
            >
               Deletar
            </button>

         </div>
      </div>
   )
}

export default UsuarioCard
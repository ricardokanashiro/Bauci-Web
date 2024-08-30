import AddUserModal from "./AddUserModal"
import UsuariosList from "./UsuariosList"

const Usuarios = () => {
   return (
      <div className="sectionwrapper__usuarios-page-wrapper">
         <UsuariosList/>
         <AddUserModal/>
      </div>
   )
}

export default Usuarios
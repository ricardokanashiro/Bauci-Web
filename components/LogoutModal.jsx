import { useContext } from "react"

import { ModalsContext } from "../contexts/ModalsContext"
import { NavigationContext } from "../contexts/NavigationContext"

import "../css/components/logout-modal.css"

const LogoutModal = () => {

   const { toggleLogoutModal } = useContext(ModalsContext)
   const { setLogged } = useContext(NavigationContext)

   function logOut() {
      localStorage.clear()
      setLogged(false)
      toggleLogoutModal()
   }

   return (
      <div className="logout-modal">

         <h2>Deseja deslogar da aplicação?</h2>

         <div className="logout-modal__buttons-area">

            <button className="logout-modal__cancelar-btn" onClick={toggleLogoutModal}>Cancelar</button>
            <button className="logout-modal__sair-btn" onClick={logOut}>Sair</button>

         </div>

      </div>
   )
}

export default LogoutModal
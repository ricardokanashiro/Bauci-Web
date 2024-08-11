import "../css/main.css"

import CartIconWhite from "../assets/IconCart.svg"
import CartIconGray from "../assets/IconCartGray.svg"
import UsersIconWhite from "../assets/iconUsersWhite.svg"
import UsersIconGray from "../assets/IconUsers.svg"

const Layout = ({ children, setSelectedSection, selectedSection }) => {
   return (
      <section className="layout">

         <section className="navbar">

            <img src="../assets/logo.svg" alt="Logo da bauci em cores pretas" />

            <nav className="navbar__links-area">

               <button 
                  className={selectedSection === "produtos" ? "navbar-item navbar-item--active" : "navbar-item"}
                  onClick={() => setSelectedSection("produtos")}
               >

                  <img src={selectedSection === "produtos" ? CartIconWhite : CartIconGray} alt="ícone de carrinho" />
                  <span>Produtos</span>

               </button>

               <button
                  className={selectedSection === "usuarios" ? "navbar-item navbar-item--active" : "navbar-item"}
                  onClick={() => setSelectedSection("usuarios")}
               >

                  <img src={selectedSection === "usuarios" ? UsersIconWhite : UsersIconGray} alt="#" />
                  <span>Usuários</span>

               </button>

            </nav>

            <button className="navbar__logout-btn">
               <span>Logout</span>
               <img src="../assets/IconLogOut.svg" alt="logout icon" />
            </button>

         </section>

         <section className="section-wrapper">
            { children }
         </section>

      </section>
   )
}

export default Layout
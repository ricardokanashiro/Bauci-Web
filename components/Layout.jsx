import { useContext } from "react"

import ModalWrapper from "./ModalWrapper"

import { ModalsContext } from "../contexts/ModalsContext"
import { NavigationContext } from "../contexts/NavigationContext"

import CartIconWhite from "../assets/IconCart.svg"
import CartIconGray from "../assets/IconCartGray.svg"
import UsersIconWhite from "../assets/iconUsersWhite.svg"
import UsersIconGray from "../assets/IconUsers.svg"

import "../css/main.css"

const Layout = ({ children }) => {

   const { modalWrapperActive } = useContext(ModalsContext)

   const { selectedSection, setSelectedSection } = useContext(NavigationContext)

   return (

      <>

         <section className="layout">

            <section className="navbar">

               <img src="../assets/logo.svg" alt="Logo da bauci em cores pretas" className="navbar__bauci-logo" />

               <nav className="navbar__links-area">

                  <button
                     className={selectedSection === "produtos" || selectedSection === "categorias" ? "navbar-item navbar-item--active" : "navbar-item"}
                     onClick={() => setSelectedSection("categorias")}
                  >

                     <img src={selectedSection === "produtos" || selectedSection === "categorias" ? CartIconWhite : CartIconGray} alt="ícone de carrinho" />
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
               {children}
            </section>

         </section>

         <section className="layout-mobile">

            <section className="section-wrapper">
               {children}
            </section>

            <section className="navbar-mobile">

               <nav className="navbar-mobile__links-area">

                  <button
                     className={selectedSection === "produtos" || selectedSection === "categorias" ? "navbar-item navbar-item--active" : "navbar-item"}
                     onClick={() => setSelectedSection("categorias")}
                  >

                     <img src={selectedSection === "produtos" || selectedSection === "categorias" ? CartIconWhite : CartIconGray} alt="ícone de carrinho" />

                  </button>

                  <button
                     className={selectedSection === "usuarios" ? "navbar-item navbar-item--active" : "navbar-item"}
                     onClick={() => setSelectedSection("usuarios")}
                  >

                     <img src={selectedSection === "usuarios" ? UsersIconWhite : UsersIconGray} alt="#" />

                  </button>

                  <button className="navbar-mobile__logout-btn">
                     <img src="../assets/IconLogOut.svg" alt="logout icon" />
                  </button>

               </nav>

            </section>

         </section>

         {
            modalWrapperActive && (
               <ModalWrapper selectedSection={selectedSection} />
            )
         }

      </>

   )
}

export default Layout
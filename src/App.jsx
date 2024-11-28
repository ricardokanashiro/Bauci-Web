import { useContext, useState } from "react"

import Layout from "../components/Layout"
import Usuarios from "../components/Usuarios"
import Produtos from "../components/Produtos"
import Categorias from "../components/Categorias"
import Login from "../components/LoginPage"

import ModalsContextProvider from "../contexts/ModalsContext"
import DataContextProvider from "../contexts/DataContext"

import { NavigationContext } from "../contexts/NavigationContext"

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {

   const { selectedSection, setSelectedSection, logged, setLogged } = useContext(NavigationContext)

   return (
      <DataContextProvider>
      <ModalsContextProvider>

         {
            logged ? 
            
            (
               <>
                  <Layout
                     selectedSection={selectedSection}
                     setSelectedSection={setSelectedSection}
                  >
                     {selectedSection === "categorias" && (<Categorias />)}
                     {selectedSection === "usuarios" && (<Usuarios />)}
                     {selectedSection === "produtos" && (<Produtos />)}
                  </Layout>

                  <ToastContainer />
               </>
            )
            
            :
            
            (<Login setLogged={setLogged} />) 
            
         }

      </ModalsContextProvider>
      </DataContextProvider>
   )
}

export default App
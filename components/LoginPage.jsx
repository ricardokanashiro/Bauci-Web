import { useState } from "react"

import { CircularProgress } from "@mui/material"

import "../css/components/login-page.css"

const Login = ({ setLogged }) => {

    const [loginCredentials, setLoginCredentials] = useState({
        login: "",
        senha: ""
    })
    
    const [loginError, setLoginError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    async function login() {

        try {

            setIsLoading(true)

            const rep = await fetch(`https://bauciapi-production.up.railway.app/administrador/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginCredentials)
            })

            const response = await rep.json()

            
            if(response.token || response.ok) { 
                localStorage.setItem('loginCredentials', response.token)
                setLogged(true)
                setLoginError(false)
            } else {
                setLoginError(true)
            }

            setIsLoading(false)
            
        }
        catch (error) {
            console.log("erro: " + error.message)
            setIsLoading(false)
        }
    }

    return (
        <section className="login-page">

            <section className="login-page__wrapper">

                <img src="/assets/logo.svg" alt="Logo da Bauci" className="login-page__logo" />

                <div className="login-page__inputs-wrapper">

                    <div className="login-page__input-wrapper">
                        
                        <input
                            type="text"
                            placeholder="Digite o login"
                            className={loginError ? "login-page__input login-page__input--error" : "login-page__input"}
                            onChange={(e) => setLoginCredentials(prev => ({ ...prev, login: e.target.value }))}
                            value={loginCredentials.login}
                        />

                        <p className={loginError && "input-wrapper__error-message"}>Login Inválido</p>

                    </div>

                    <div className="login-page__input-wrapper">

                        <input
                            type="password"
                            placeholder="Digite a senha"
                            className={loginError ? "login-page__input login-page__input--error" : "login-page__input"}
                            onChange={(e) => setLoginCredentials(prev => ({ ...prev, senha: e.target.value }))}
                            value={loginCredentials.senha}
                        />

                        <p className={loginError && "input-wrapper__error-message"}>Senha Inválida</p>

                    </div>

                </div>

                <button className="login-page__enter-button" onClick={login}>
                    { isLoading ? <CircularProgress color="#FFF" size="1.5rem" /> : "Entrar"}
                </button>

            </section>

        </section>
    )
}

export default Login
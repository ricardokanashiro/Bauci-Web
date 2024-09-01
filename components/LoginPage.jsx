import "../css/components/login-page.css"
import "../assets/logo.svg"

const Login = () => {
    return (
        <section className="login-page">
            <section className="login-page__wrapper">
                <img src="../assets/logo.svg" alt="Logo da Bauci" className="login-page__logo"/>
                <div className="login-page__input-wrapper">
                    <input type="text" placeholder="Digite o login" className="login-page__input"/>
                    <input type="text" placeholder="Digite a senha" className="login-page__input"/>
                </div>
                <button className="login-page__enter-button">Entrar</button>
            </section>
        </section>
    )
}

export default Login
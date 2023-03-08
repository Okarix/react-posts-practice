import { useContext } from "react"
import MyButton from "../components/UI/button/MyButton"
import MyInput from "../components/UI/input/MyInput"
import { AuthContext } from "../context/context"


const Login = () => {
    const { IsAuth, setIsAuth } = useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', true)
    }

    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <MyInput placeholder="Введите логин" type="text" />
                <MyInput placeholder="Введите пароль" type="password" />
                <MyButton>Войти</MyButton>
            </form>
        </div>
    )
}

export default Login

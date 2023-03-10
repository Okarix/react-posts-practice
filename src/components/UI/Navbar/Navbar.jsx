import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../../context/context"
import MyButton from "../button/MyButton"

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout}>Выйти</MyButton>
            <div className="navbar__links">
                <Link style={{ marginRight: '10px', color: 'teal', textDecoration: 'none' }} to="/about">О сайте</Link>
                <Link style={{ marginRight: '10px', color: 'teal', textDecoration: 'none' }} to="/posts">Посты</Link>
            </div>
        </div>
    )
}

export default Navbar

import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context/context';
import { publicRoutes, privateRoutes } from '../router/routes';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    return (
        isAuth
            ? <Routes>
                {privateRoutes.map((route) => {
                    return <Route key={route.path} element={<route.element />} path={route.path} />
                })}
                <Route path="/*" element={<Navigate to="/posts" replace />} />
            </Routes>
            : <Routes>
                {publicRoutes.map((route) => {
                    return <Route key={route.path} element={<route.element />} path={route.path} />
                })}
                <Route path="/*" element={<Navigate to="/login" replace />} />
            </Routes>

    )
}

export default AppRouter

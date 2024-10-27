import Dashboard from "../pages/Dashboard"
import Home from "../pages/Home"
import Login from "../pages/auth/Login"
import Registro from "../pages/auth/Registro"
export let rutas = [
    {
        path: '/',
        element: <Home />

    },
    {
        path: '/Dashboard',
        element: <Dashboard />
    },
    {
        path: '/Login',
        element: <Login />
    },
    {
        path: '/Registro',
        element: <Registro />
    }
]
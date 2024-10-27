import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import { rutas } from './routes/routerapp'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

let router = createBrowserRouter(rutas)

import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

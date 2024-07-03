import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages/main'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Menu from './pages/menu'
import Detail from './pages/detail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/detail/:id',
    element: <Detail />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

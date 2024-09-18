import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Menu from './components/menu/Menu'
import Notfound from './components/notFound/Notfound'

let routers = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Menu /> },
      { path: '/*', element: <Notfound /> }
    ]
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={routers} ></RouterProvider>
    </>
  )
}

export default App

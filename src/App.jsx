import React from 'react'
import './App.css'
import Home from './components/home'
import Navbar from './components/Navbar'
import Login from './components/login'
import Dashboard from './components/dashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const Router = createBrowserRouter(
    [
      {
        path: '/',
        element:
          <div>
            <Navbar />
            <Home />
          </div>
      },
      {
        path: '/login',
        element:
          <div>
            <Navbar />
            <Login />
          </div>
      },
      {
        path: '/dashboard',
        element:
          <div>
            <Navbar />
            <Dashboard />
          </div>
      }, 
        {
    path: '*',
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    )
  }
    ]

  )

  return (
    <div>
      <RouterProvider router={Router} />
    </div>

  )
}

export default App
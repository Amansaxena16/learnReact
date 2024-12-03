import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import Home from './assets/components/home/Home.jsx'
import Contact from './assets/components/contact/Contact.jsx'
import Layout from './assets/components/Layout.jsx'
import About from './assets/components/about/About.jsx'
import Github from './assets/components/github/Github.jsx'
import Fun from './assets/components/fun/Fun.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='github' element={<Github/>} />
      <Route path='fun' element={<Fun/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <UserContextProvider>
    <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Compontents/Header/Header.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Compontents/Home/Home.jsx'
import React from 'react'
import About from './Compontents/About/About.jsx'
import Contact from './Compontents/Contact/Contact.jsx'
import Login from './Compontents/Login/Login.jsx'
import User from './Compontents/User/User.jsx'
import Weather, { gitLoder } from './Compontents/Wether/Weather.jsx'

// const router = createBrowserRouter([

//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path:"",
//         element: <Login />
//       },
//       {
//         path:"Home",
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'Contact',
//         element: <Contact />
//       }
//     ]
//   },
  
// ])
 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>

      <Route path='' element={<Login/>} />
      <Route path='Home' element={<Home/>} />
      <Route path='About' element={<About/>} />
      <Route path='Contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route 
      loader ={ gitLoder}
      path='weather' 
      element={<Weather/>} />
      
      
       </Route>
  )
 )
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
    
  </React.StrictMode>,
)

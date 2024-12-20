import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Header from './components/Header'
import Filtro from './components/Filtro'
import Contenido from './components/Contenido'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Header/>
      <Filtro/>
      <Footer/>
    </>
  )
}

export default App

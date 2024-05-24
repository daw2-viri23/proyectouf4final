import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Camera } from 'lucide-react';
import { Icon } from 'lucide-react';
import { burger } from '@lucide/lab';
import { Cards } from './componentes/Cards';
import { Header } from './vistas/Header';
import { GrupoCards } from './componentes/GrupoCards';




function App() {

  
  return (
    <>
    <Header></Header>
    <GrupoCards></GrupoCards>
    </>
  )
}

export default App

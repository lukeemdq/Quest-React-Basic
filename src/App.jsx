import { useState } from 'react'
import Textuppercase from './assets/components/TextUpperCase/textUpper'
import './App.css'
import Button from './assets/components/button/button'

function App() {
  

  return (
    <>
      <Textuppercase text={"Teste para mostrar que é transformado em upper case"} color='green' />
      <Button label='Testando a label alert'/>
    </>
  )
}

export default App

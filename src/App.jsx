import React, { useState } from 'react'
import LearnReact from './assets/components/LearnReact'
import PasswordGenerator from './assets/components/PassGenerator'
import CurrencyConvertor from './assets/components/CurrencyConvertor'
import Header from './assets/components/header/Header'

function App() {
  return (
    <>
      <LearnReact/>
      <PasswordGenerator/>
      <CurrencyConvertor/>
    </>
  )
}

export default App  
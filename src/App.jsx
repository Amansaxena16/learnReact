import React, { useState } from 'react'
import LearnUseState from './assets/components/learUseState'
import Form from './assets/components/Form'
import PreviewForm from './assets/components/PreviewForm'
import { FormPreviewContext } from './context/FormContext'

function App() {
  const [previewText, setPreviewText] = useState("")
  return (
    <>

    <FormPreviewContext.Provider value={{previewText, setPreviewText}}>
      <LearnUseState/>
      <Form/>
      <PreviewForm/>
    </FormPreviewContext.Provider>
    </>
  )
}

export default App  
import React, { useState } from 'react'
import CreateNote from './CreateNote'
import './Notes.css'

const Notes = () => {
  const [inputText, setInputText] = useState("")
  const [notes, setNotes] = useState ([])
  const saveHandler = () => {

  }
  return (
    <div className='notes'>
      <CreateNote
      inputText={inputText}
      setInputText = {setInputText}
      saveHandler = {saveHandler}
      />
    </div>
  )
}
export default Notes

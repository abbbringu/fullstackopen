import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [toFilt, setToFilt] = useState(false) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [newFilt, setNewFilt] = useState('')

  useEffect(() => {      
    axios      
      .get('http://localhost:3001/persons')      
      .then(response => {   
        setPersons(response.data)})}, [])  

  const handleInput = (event) => {
    setNewName(event.target.value)
  }

  const handleInputNum = (event) => {
    setNewNum(event.target.value)
  }

  const handleInputFilt = (event) => {
    setNewFilt(event.target.value)
    setToFilt( event.target.value !== '')
  }

  const newPhoneNumber = (event) => {
    event.preventDefault()
    if (persons.find(elem => elem.name === newName) === undefined){
      setPersons(persons.concat({name: newName, number:newNum, id: persons.length + 1})) 
      setNewName('')
      setNewNum('')
    }
    else {
      alert(`${newName} is already added to phonebook`)
    }
    
    
  }
  const Filtered = toFilt ? persons.filter(elem => elem.name.toLowerCase().includes(newFilt.toLowerCase())) : persons 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilt} handle={handleInputFilt}/>
      <h2>add a new</h2>
      <PersonForm 
        nameVal={newName}
        nameHandle = {handleInput}
        numVal = {newNum}
        numHandle = {handleInputNum}
        subHandle = {newPhoneNumber}
        />
      <h2>Numbers</h2>
      <Persons persons = {Filtered}/>
    </div>
  )
}

export default App
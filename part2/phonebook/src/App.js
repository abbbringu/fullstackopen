import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', num:'073-323-823', id: 1},
    { name: 'Ada Lovelace', num: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', num: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', num: '39-23-6423122', id: 4 }

  ]) 
  const [filtPersons, setFiltPersons] = useState(persons) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [newFilt, setNewFilt] = useState('')

  const handleInput = (event) => {
    setNewName(event.target.value)
  }

  const handleInputNum = (event) => {
    setNewNum(event.target.value)
  }

  const handleInputFilt = (event) => {
    setNewFilt(event.target.value)
    setFiltPersons(persons.filter(elem => elem.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  const newPhoneNumber = (event) => {
    event.preventDefault()
    if (persons.find(elem => elem.name === newName) === undefined){
      setPersons(persons.concat({name: newName, num:newNum, id: persons.length + 1})) 
      setNewName('')
      setNewNum('')
      setFiltPersons(persons)
    }
    else {
      alert(`${newName} is already added to phonebook`)
    }
    
  }
  
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
      <Persons persons = {filtPersons}/>
    </div>
  )
}

export default App
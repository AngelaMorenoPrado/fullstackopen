import { useState } from 'react'

import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

function App() {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const isNameAlreadyAdded = checkIfNameAlreadyExists(newName)
    if (isNameAlreadyAdded) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const lastId = persons[persons.length - 1].id
    setPersons([
      ...persons,
      { name: newName, number: newNumber, id: lastId + 1 }
    ])
    setNewName('')
    setNewNumber('')
  }

  const checkIfNameAlreadyExists = (name) => {
    return persons.some((person) => {
      return person.name === name
    })
  }

  const handleFiltering = (event) => {
    setFilterValue(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={filterValue} alterFiltering={handleFiltering} />
      <h1>add a new</h1>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        alterName={handleNewName}
        newNumber={newNumber}
        alterNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filterValue={filterValue} />
    </div>
  )
}

export default App

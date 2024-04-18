import { useState } from 'react'

function App() {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '39-44-5325523' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
    setPersons([
      ...persons,
      { name: newName, number: newNumber }
    ])
  }

  const checkIfNameAlreadyExists = (name) => {
    return persons.some((person) => {
      return person.name === name
    })
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
        <div>
          <span>name: </span>
          <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <span>number: </span>
          <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => {
        return <p key={person.name}>{ person.name } { person.number }</p>
      })}
    </div>
  )
}

export default App

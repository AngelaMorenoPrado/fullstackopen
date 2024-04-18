import { useState } from 'react'

function App() {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value)
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
      { name: newName }
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
        <span>name: </span>
        <input value={newName} onChange={handleNewName} />
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => {
        return <p key={person.name}>{ person.name }</p>
      })}
    </div>
  )
}

export default App
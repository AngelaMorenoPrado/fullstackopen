import { useState } from 'react'

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
      <span>filter shown with </span> <input value={filterValue} onChange={handleFiltering} />
      <h1>add a new</h1>
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
      {
        filterValue.length == 0
        ? persons.map(person => {
            return <p key={person.id}>{ person.name } { person.number }</p>
          })
        : persons.map(person => {
            const containsFilteringValue = person.name.toLowerCase().includes(filterValue.toLowerCase())
            return containsFilteringValue
            ? <p key={person.id}>{ person.name } { person.number }</p>
            : []
        })
      }
    </div>
  )
}

export default App

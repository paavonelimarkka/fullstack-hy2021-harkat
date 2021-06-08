import React, { useState } from 'react'

const Names = (props) => {
  return (
    <ul>
      {props.namesToShow.map(numbers => {
        return (
          <li key={numbers.name}>{numbers.name} - {numbers.number}</li>
        )
        })
      }
    </ul>
  )
}

const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [numbers, setNumbers] = useState([
    {
      name: 'Arto Hellas',
      number: 122
    },
    {
      name: 'Pasi Pasinpoika',
      number: 187
    }
  ])

  const handleNameChange = (event) => { setNewName(event.target.value) }
  const handleNumberChange = (event) => { setNewNumber(event.target.value) }
  const handleSearchChange = (event) => { setNewSearch(event.target.value) }

  const filteredNames = numbers.filter(numbers => numbers.name.toLowerCase().includes(newSearch.toLowerCase()))

  const namesToShow = filteredNames.length > 0
    ? filteredNames
    : numbers

  const addData = (event) => { 
    event.preventDefault()

    if (numbers.some(e => e.name === newName && newName && newNumber)) {
      alert(newName + " is already added to phonebook")
    }
    else {
      const nameObject = {
        name: newName,
        number: newNumber
      }
      setNumbers(numbers.concat(nameObject))
      setNewNumber('')
      setNewName('')
    }

  }

  return (
    <div>
      <h1>Phonebook</h1>
      <form>
        <div> Name: <input value={newName} onChange={handleNameChange} /></div>
        <div> Number: <input value={newNumber} onChange={handleNumberChange} /></div>

        <div>
          <button type="submit" onClick={addData} >Add</button>
        </div>
      </form>

      <h2>Search users</h2>
      <form>
        <input value={newSearch} onChange={handleSearchChange} />
      </form>

      <h2>Numbers</h2>
      <Names numbers={numbers} namesToShow={namesToShow} />
    </div>
  )
}

export default App
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AddPerson = (props) => {
  return (
    <form>
      <div> Name: <input value={props.newName} onChange={props.handleNameChange} /></div>
      <div> Number: <input value={props.newNumber} onChange={props.handleNumberChange} /></div>

      <div>
        <button type="submit" onClick={props.addData} >Add</button>
      </div>
    </form>
  )
}

const SearchPerson = (props) => {
  return (
    <form>
        <input value={props.newSearch} onChange={props.handleSearchChange} />
      </form>
  )
}

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
  const [numbers, setNumbers] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setNumbers(response.data)
      })
  }, [])

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
      <AddPerson
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addData={addData}
      />

      <h2>Search users</h2>
      <SearchPerson
        newSearch={newSearch}
        handleSearchChange={handleSearchChange}
      />

      <h2>Numbers</h2>
      <Names numbers={numbers} namesToShow={namesToShow} />
    </div>
  )
}

export default App
import React, { useState } from 'react'

const Names = ({numbers}) => {
  return (
    <ul>
      {numbers.map(numbers => {
        return (
          <li key={numbers.name}>{numbers.name} {numbers.number}</li>
        )
        })
      }
    </ul>
  )
}

const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [numbers, setNumbers] = useState([
    {
      name: 'Arto Hellas',
      number: 122
    }
  ])

  const handleNameChange = (event) => { setNewName(event.target.value) }
  const handleNumberChange = (event) => { setNewNumber(event.target.value) }

  const addData = (event) => { 
    event.preventDefault()

    if (numbers.some(e => e.name === newName && newName && newNumber)) {
      alert(newName + " is already added to phonebook")
      console.log("Miau")
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
      <h2>Debug zone</h2>
      <p>NewName: {newName}</p>
      <p>NewNumber: {newNumber}</p>
      <h2>Phonebook</h2>
      <form>
        <div> name: <input value={newName} onChange={handleNameChange} /></div>
        <div> number: <input value={newNumber} onChange={handleNumberChange} /></div>

        <div>
          <button type="submit" onClick={addData} >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Names numbers={numbers} />
      </div>
  )
}

export default App
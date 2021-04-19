import React, { useState } from 'react'

const Names = ({numbers}) => {
  return (
    <ul>
      {numbers.map(numbers => {
        return (
          <li key={numbers.name}>{numbers.name}</li>
        )
        })
      }
    </ul>
  )
}

const App = () => {
  const [newName, setNewName] = useState('')
  const [numbers, setNumbers] = useState([
    { name: 'Arto Hellas' }
  ])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addName = (event) => { 
    event.preventDefault()

    if (numbers.some(e => e.name === newName)) {
      alert(newName + " is already added to phonebook")
      console.log("Miau")
    }
    else {
      const nameObject = { name: newName }
      setNumbers(numbers.concat(nameObject))
      setNewName('')
    }

  }

  return (
    <div>
      <h2>Debug zone</h2>
      <p>NewName: {newName}</p>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit" onClick={addName} >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Names numbers={numbers} />
      </div>
  )
}

export default App
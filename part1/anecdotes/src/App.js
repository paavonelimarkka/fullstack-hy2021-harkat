import React, { useState } from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  )
}

const RandomAnecdote = (props) => {
  return (
    <div>
      <p>{props.anecdotes[props.selected]}</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)

  return (
    <div>
      <RandomAnecdote anecdotes={anecdotes} selected={selected} />
      <Button handleClick={() => setSelected(~~(Math.random() * (anecdotes.length)))} text={"Another one!"} />
    </div>
  )
}

export default App
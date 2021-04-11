import React, { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState([])

  const allAverage = all => all.reduce((a,b) => a + b, 0) / all.length

  const positiveRatio = all => {
    let positiveSum = 0
    all.forEach(element => {
      if (element == 1) {
        positiveSum = positiveSum+1
      }
    })
    return positiveSum / all.length
    }

  return (
    <div>
      <h1>Give us feedback!</h1>

      <button onClick={ () => setGood(good+1) + setAll(all.concat(1)) }>Good</button>
      <button onClick={ () => setNeutral(neutral+1) + setAll(all.concat(0)) }>Neutral</button>
      <button onClick={ () => setBad(bad+1) + setAll(all.concat(-1)) }>Bad</button>

      <h2>Statistics</h2>

      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <hr/>
      <p>All: {all.length} </p>
      <p>Average: {allAverage(all)} </p>
      <p>Positive: {positiveRatio(all)} </p>
    </div>
  )
}

export default App
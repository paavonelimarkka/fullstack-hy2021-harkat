import React, { useState } from 'react'


const Statistics = (props) => {

  const positiveRatio = all => {
    let positiveSum = 0
    all.forEach(element => {
      if (element === 1) {
        positiveSum = positiveSum+1
      }
    })
    return positiveSum / all.length
  }

  const allAverage = all => all.reduce((a,b) => a + b, 0) / all.length

  if (props.all.length === 0) {
    return (
      <div>
        <p>Please give us feedback to see the statistics.</p>
      </div>
    )
  }
  else {
    return (
      <div>

        <h2>Statistics</h2>

        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>

        <hr/>

        <p>All: {props.all.length}</p>
        <p>Average: {allAverage(props.all)}</p>
        <p>Positive: {positiveRatio(props.all)}</p>

      </div>
    )
  }
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState([])

  return (
    <div>

      <h1>Give us feedback!</h1>

      <button onClick={ () => setGood(good+1) + setAll(all.concat(1)) }>Good</button>
      <button onClick={ () => setNeutral(neutral+1) + setAll(all.concat(0)) }>Neutral</button>
      <button onClick={ () => setBad(bad+1) + setAll(all.concat(-1)) }>Bad</button>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
      />
      
    </div>
  )
}

export default App
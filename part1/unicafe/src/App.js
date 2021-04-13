import React, { useState } from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  )
}

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {

  const positiveRatio = all => {
    let positiveSum = 0
    all.forEach(element => {
      if (element === 1) {
        positiveSum = positiveSum+1
      }
    })
    return positiveSum / all.length * 100 + "%"
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
        <table border="1">
          <tbody>
            <Statistic text={"Good"} value={props.good} />
            <Statistic text={"Neutral"} value={props.neutral} />
            <Statistic text={"Bad"} value={props.bad} />
            <Statistic text={"All"} value={props.all.length} />
            <Statistic text={"Average"} value={allAverage(props.all)} />
            <Statistic text={"Positive"} value={positiveRatio(props.all)} />   
          </tbody>       
        </table>    
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

      <Button handleClick={() => setGood(good+1) + setAll(all.concat(1))} text="Good" />
      <Button handleClick={() => setNeutral(neutral+1) + setAll(all.concat(0))} text="Neutral" />
      <Button handleClick={() => setBad(bad+1) + setAll(all.concat(-1))} text="Bad" />

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
import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // event handlers
  const increaseGood = () => (setGood(good + 1))
  const increaseNeutral = () => (setNeutral(neutral + 1))
  const increaseBad = () => (setBad(bad + 1))

  return (
    <div>
      <Heading text="give feedback" />
      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="neutral" />
      <Button onClick={increaseBad} text="bad" />
      <Heading text="statistics" />
      <Statistic type="good" count={good} />
      <Statistic type="neutral" count={neutral} />
      <Statistic type="bad" count={bad} />
    </div>
  )
}

const Heading = ({text}) => (
  <h1>{text}</h1>
)

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const Statistic = ({type, count}) => (
  <p>{type} {count}</p>
)

export default App
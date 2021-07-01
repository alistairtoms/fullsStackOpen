import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAllClicks] = useState(0)
  const [average, setAverage] = useState(0)

  // event handlers
  const increaseAllClicks = () => {
    setAllClicks(allClicks + 1)
  }
  const increase = (feedback) => {
    if (feedback === 'good') {
      return () => {
        setGood(good + 1)
        increaseAllClicks()
        setAverage((good + 1 - bad) / (allClicks + 1))
      }
    }
    else if (feedback === 'neutral') {
      return () => {
        setNeutral(neutral + 1)
        increaseAllClicks()
        setAverage((good - bad) / (allClicks + 1))
      }
    }
    else if (feedback === 'bad') {
      return () => {
        setBad(bad + 1)
        increaseAllClicks()
        setAverage((good - bad - 1) / (allClicks + 1))
      }
    }
  }

  return (
    <div>
      <Heading text="give feedback" />
      <Button onClick={increase('good')} text={'good'} />
      <Button onClick={increase('neutral')} text={'neutral'} />
      <Button onClick={increase('bad')} text={'bad'} />
      <Heading text="Statistics" />
      <Statistics type="good" count={good} />
      <Statistics type="neutral" count={neutral} />
      <Statistics type="bad" count={bad} />
      <Statistics type="all" count={allClicks} />
      <Statistics type="average" count={average} />
    </div>
  )
}

const Heading = ({text}) => (
  <h1>{text}</h1>
)

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const Statistics = ({type, count}) => (
  <p>{type} {count}</p>
)

export default App
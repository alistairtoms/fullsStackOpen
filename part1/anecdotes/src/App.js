import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0,0])

  // event handlers
  const randomiseSelected = () => {
    const randomNum = Math.floor(Math.random() * 6)
    setSelected(randomNum)
  }
  const vote = () => {
    const newVotes = [ ...votes ]
    newVotes[selected] += 1
    setVotes(newVotes)
    setMostVoted(newVotes.indexOf(Math.max(...newVotes)))
  }

  return (
    <div>
      <Heading text='Anecdote of the day' />
      {anecdotes[selected]}
      <br></br>
      <p>has {votes[selected]} votes</p>
      <Button text='vote' handleClick={vote} />
      <Button text='next anecdote' handleClick={randomiseSelected} />
      <Heading text='Anecdote with the most votes' />
      {anecdotes[mostVoted]}
    </div>
  )
}

const Heading = ({text}) => (
  <h1>{text}</h1>
)

const Button = ({text, handleClick}) => (
    <button onClick={handleClick}>{text}</button>
)

export default App
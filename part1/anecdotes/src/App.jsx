import { useState } from 'react'

const Button = ({eventClick, text}) => {
  return (
    <button onClick={eventClick}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(8))
  const copy = [...votes]

  const randomAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }

const vote = () => {
copy[selected] += 1
setVotes(copy)
}  

const maxVotes = copy.reduce((a, b) => Math.max(a, b), -Infinity);
const topAnecdote = copy.indexOf(Math.max(maxVotes));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button eventClick={vote} text='vote'/>
      <Button eventClick={randomAnecdote} text='next anecdote'/>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[topAnecdote]}</p>
      <p>has {maxVotes} votes</p>
    </div>
  )
}

export default App
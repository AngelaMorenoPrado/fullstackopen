import Anecdote from './Anecdote'
import Header from './Header'
import Buttons from './Buttons'
import MostVotedAnecdote from './MostVotedAnecdote'

import { useState } from 'react'

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
  const [points, setPoints] = useState({})

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  const voteAnecdote = () => {
    const doesAnecdoteHaveAnyPoints = points[selected]
    if (!doesAnecdoteHaveAnyPoints) {
      setPoints({
        ...points,
        [selected]: 1
      })
      return
    }
    setPoints({
      ...points,
      [selected]: points[selected] + 1
    })
  }

  const getMostVotedAnecdote = () => {
    let maxVotes = 0
    let mostVotedAnecdote = {anecdote: anecdotes[0], points: 0}
    for (const [key, value] of Object.entries(points)) {
      const hasMoreVotes = value > maxVotes
      if (hasMoreVotes) {
        maxVotes = value
        mostVotedAnecdote = {anecdote: anecdotes[key], points: value}
      }
    }
    return mostVotedAnecdote
  }

  const buttons = [
    {function: () => voteAnecdote(), text:'vote'},
    {function: () => generateRandomNumber(), text:'next anecdote'}
  ]

  return (
    <div>
      <Header text='Anecdote of the day' />
      <Anecdote text={anecdotes[selected]} />
      <Buttons data={buttons} />
      <Header text='Anecdote with most votes' />
      <MostVotedAnecdote data={getMostVotedAnecdote()} />
    </div>
  )
}

export default App
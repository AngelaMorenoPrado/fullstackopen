import Header from './Header'
import Button from './Button'
import Statistics from './Statistics'
import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const values = [
    {state: 'good', value: good},
    {state: 'neutral', value: neutral},
    {state: 'bad', value: bad}
  ]

  const buttons = [
    {function: () => setGood(good+1), text: 'good'},
    {function: () => setNeutral(neutral+1), text: 'neutral'},
    {function: () => setBad(bad+1), text: 'bad'},
  ]

  return (
    <div>
      <Header text='give feedback' />
      <Button buttons={buttons} />
      <Header text='statistics' />
      <Statistics values={values} />
    </div>
  )
}

export default App
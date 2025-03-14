import { useState } from 'react'

const Title = ({title}) => <h1>{title}</h1>

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = ({result, text}) => <p>{text}{result}</p>




const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Title title='Give feedback' />

      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />

      <Title title='Statics' />

      <Display result={good} text='Good: ' />
      <Display result={neutral} text='Neutral: ' />
      <Display result={bad} text='Bad: ' />
      
    </div>
  )
}

export default App
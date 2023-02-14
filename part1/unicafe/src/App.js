import { useState } from 'react'

const Button = (props) => {
  return(
  <button onClick={props.handler} >{props.text}</button>
  )
}

const DispStats = (props) => {
  const total = props.bad + props.neutral + props.good
  return(
    <>
      <p>Good {props.good}</p>
      <p>Neutral {props.neutral}</p>
      <p>Bad {props.bad}</p>
      <p>Total {total}</p>
      <p>Average {((props.bad*-1) + props.good) / total}</p>
      <p>Positive {(props.good / total)*100} %</p>
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const clkGood = newVal => {
    setGood(newVal)
  } 
  const clkNeutral = newVal => {
    setNeutral(newVal)
  } 
  const clkBad = newVal => {
    setBad(newVal)
  } 

  return (
    <div>
      <h1>give feedback</h1>
      <Button handler={() => clkGood(good + 1)} text = "Good" />
      <Button handler={() => clkNeutral(neutral + 1)} text = "Neutral" />
      <Button handler={() => clkBad(bad + 1)} text = "Bad" />
      <h1>statistics</h1>
      <DispStats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}



export default App
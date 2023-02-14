import { useState } from 'react'

const Button = (props) => {
  return(
  <button onClick={props.handler} >{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return(
    <tr>
      <th>{props.text}</th>
      <th>{props.value}</th>
    </tr>
  )
}

const DispStats = (props) => {
  const bad = props.bad, neutral = props.neutral, good = props.good
  const total = bad + neutral + good
  if (total){
    return(
      <table>
        <tbody>
          <StatisticLine text="Good" value={good}/>
          <StatisticLine text="Neutral" value={neutral}/>
          <StatisticLine text="Bad" value={bad}/>
          <StatisticLine text="Total" value={total}/>
          <StatisticLine text="Average" value={((bad*-1) + good) / total}/>
          <StatisticLine text="Positive" value={(good / total)*100}/>
        </tbody>
      </table>
    )
  }
  else {
    return(
      <>
        <p>No Feedback Given</p>
      </>
    )
  }
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
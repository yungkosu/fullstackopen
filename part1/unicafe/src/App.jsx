import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
<button onClick={handleClick}>
  {text}
  </button> 
  )
}

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return <p>No feedback given</p>
  }
  return (
    <table>  
      <tbody>
      <tr>
    <StatisticsLine text='good' value={props.good} />
    </tr>
    <tr>
    <StatisticsLine text='neutral' value={props.neutral} />
    </tr>
    <tr>
    <StatisticsLine text='bad' value={props.bad} />
    </tr>
    <tr>
    <StatisticsLine text='total' value={props.total} />
    </tr>
    <tr>
    <StatisticsLine text='average' value={(props.good - props.bad) / props.total} />
    </tr>
    <tr>
    <StatisticsLine text={'percentage ' + (props.good/props.total)*100 + ' %'} />
    </tr>
    </tbody>
    </table>
  )
}

const StatisticsLine = ({text, value}) => {
  return <td>{text} {value}</td>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const goodFeedback = ()  => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
  }

  const neutralFeedback = ()  => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(good + updatedNeutral + bad)

  }

  const badFeedback = ()  => {
    const updatedNegative = bad + 1
    setBad(updatedNegative)
    setTotal(good + neutral + updatedNegative)
  }

  return (
<div>
<h1>give feedback</h1>
<Button handleClick={goodFeedback} text='good'/>
<Button handleClick={neutralFeedback} text='neutral'/>
<Button handleClick={badFeedback} text='bad'/>
<h1>statistics</h1>
<Statistics good={good} neutral={neutral} bad={bad} total={total}/>
</div>
  )
}

export default App
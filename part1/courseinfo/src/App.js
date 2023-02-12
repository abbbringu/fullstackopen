const Header = (props) => {
  return (
  <>
    <h1>{props.course}</h1>
  </>
  )
}

const Part = (props) => {
  return(
    <>
      <p>
        {props.part} {props.exAmount}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
  <>
    <Part part = {props.parts[0]} exAmount = {props.exercises[0]} />
    <Part part = {props.parts[1]} exAmount = {props.exercises[1]} />
    <Part part = {props.parts[2]} exAmount = {props.exercises[2]} />
  </>
  )
}

const Total = (props) => {
  return (
  <>
    <p>Number of exercises {props.total}</p>
  </>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1.name, part2.name, part3.name]} exercises={[part1.exercises,part2.exercises,part3.exercises]}/>
      
      <Total total = {part1.exercises+part2.exercises+part3.exercises}/>
    </div>
  )
}

export default App;

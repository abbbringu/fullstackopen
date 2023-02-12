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
  const course = props.parts
  return (
  <>
    <Part part = {course[0].name} exAmount = {course[0].exercises} />
    <Part part = {course[1].name} exAmount = {course[1].exercises} />
    <Part part = {course[2].name} exAmount = {course[2].exercises} />
  </>
  )
}

const Total = (props) => {
  const course = props.parts
  return (
  <>
    <p>Number of exercises {course[0].exercises+course[1].exercises+course[2].exercises}</p>
  </>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

export default App;

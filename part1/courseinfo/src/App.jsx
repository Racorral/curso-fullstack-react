const Header = (course) => {
  return (
    <>
      <h1>{course.title}</h1>
    </>
  )
}

const Part = (part) => {
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  )
}

const Content = (content) => {
  return (
    <>
      <Part name={content.part1} exercises={content.exercises1} />
      <Part name={content.part2} exercises={content.exercises2} />
      <Part name={content.part3} exercises={content.exercises3} />
    </>
  )
}

const Total = (total) => {
  return (
    <>
      <p>Number of exercises {total.totalExercises}</p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'

  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const totalExercises = exercises1 + exercises2 + exercises3

  return (
    <>
      <Header title={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total totalExercises={totalExercises} />
    </>
  )
}

export default App

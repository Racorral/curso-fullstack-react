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
      <Part name={content.part1.name} exercises={content.part1.exercises} />
      <Part name={content.part2.name} exercises={content.part2.exercises} />
      <Part name={content.part3.name} exercises={content.part3.exercises} />
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
    <>
      <Header title={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total totalExercises={part1.exercises + part2.exercises + part3.exercises} />
    </>
  )
}

export default App

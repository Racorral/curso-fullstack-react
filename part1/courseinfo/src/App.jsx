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
      <Part name={content.part[0].name} exercises={content.part[0].exercises} />
      <Part name={content.part[1].name} exercises={content.part[1].exercises} />
      <Part name={content.part[2].name} exercises={content.part[2].exercises} />
    </>
  )
}

const Total = (part) => {
  return (
    <>
      <p>Number of exercises {part.parts[0].exercises + part.parts[1].exercises + part.parts[2].exercises}</p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <>
      <Header title={course} />
      <Content part={parts} />
      <Total parts={parts} />
    </>
  )
}

export default App

const Header = (course) => {
  return (
    <>
      <h1>{course.title.name}</h1>
    </>
  )
}

const Part = (part) => {
  return (
    <>
      <p>
        {part.part.name} {part.part.exercises}
      </p>
    </>
  )
}

const Content = (content) => {
  return (
    <>
      <Part part={content.part.parts[0]}  />
      <Part part={content.part.parts[1]} />
      <Part part={content.part.parts[2]} />
    </>
  )
}

const Total = (total) => {
  return (
    <>
      <p>Number of exercises {total.part.parts[0].exercises + total.part.parts[1].exercises + total.part.parts[2].exercises}</p>
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
    <>
      <Header title={course} />
      <Content part={course} />
      <Total part={course} />
    </>
  )
}

export default App

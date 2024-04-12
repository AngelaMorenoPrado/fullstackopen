import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
  const courseName = 'Half Stack application development'
  const courseParts = [
    { name: 'Fundamentals of React', exercises: 10},
    { name: 'Using props to pass data', exercises: 7},
    { name: 'State of a component', exercises: 14}
  ]
  let courseExercises = 0;
  courseParts.forEach(part => {
    courseExercises += part.exercises;
  });

  return (
    <div>
      <Header name={courseName} />
      <Content parts={courseParts} />
      <Total exercises={courseExercises} />
    </div>
  )
}

export default App

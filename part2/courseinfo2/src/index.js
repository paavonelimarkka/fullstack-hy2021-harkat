import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({course}) => {
  let exercises = course.parts.map(parts => parts.exercises)
  let sumOfExercises = exercises.reduce((a, b) => a + b, 0)
  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map(parts => {
          return (
            <li key={parts.id}>{parts.name}
              <ul><li>Exercises: {parts.exercises}</li></ul>
            </li>    
            )
          })
        }
      </ul>
      <strong>Total of exercises: {sumOfExercises}</strong>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  
  return <Course course={course} /> 
}

ReactDOM.render(<App />, document.getElementById('root'))
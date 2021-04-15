import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({courses}) => {
    return (
    <div>
      {courses.map(courses => {
        return (
          <div key={courses.id}>
            <h1>{courses.name}</h1>
            <ul>
              {courses.parts.map(parts => {
                return (
                  <li key={parts.id}>{parts.name}
                    <ul><li>Exercises: {parts.exercises}</li></ul>
                  </li>    
                  )
                })
              }
            </ul>
            <strong>Total of exercises: {courses.parts.map(parts => parts.exercises).reduce((a, b) => a + b, 0)}</strong>
          </div>
        )
      })
    }
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} /> 
}

ReactDOM.render(<App />, document.getElementById('root'))
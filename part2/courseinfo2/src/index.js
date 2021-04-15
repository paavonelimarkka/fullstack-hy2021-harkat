import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}

const Content = ({parts}) => {
  return (
    <ul>
      {parts.map(parts => {
        return (
          <li>{parts.name}
            <ul><li>Exercises: {parts.exercises}</li></ul>
          </li>            
          )
        })
      }
    </ul>
  )
}

const Total = ({ courses }) => {
  return(
    <strong>Total of exercises: {courses.parts.map(parts => parts.exercises).reduce((a, b) => a + b, 0)}</strong>
  ) 
}

const Course = ({courses}) => {
    return (
    <div>
      {courses.map(courses => {
        return (
          <div key={courses.id}>
            <Header name={courses.name} />
            <Content parts={courses.parts} />
            <Total courses={courses} />
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
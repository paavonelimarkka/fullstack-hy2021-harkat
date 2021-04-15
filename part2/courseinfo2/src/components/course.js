import React from 'react'

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
          <li key={parts.id}>{parts.name}
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

export default Course
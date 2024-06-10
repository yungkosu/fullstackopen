const Header = ({name}) => {
return (
 <h2>{name}</h2>
)
}

const Content = ({parts}) => {
  return (
<ul>
  {parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)}
</ul>

  )
}

const Total = ({ parts }) => {
const sum = parts.reduce((total, part) => total + part.exercises, 0)
return <p><b>Total of {sum} exercises</b></p>
}


const Course = ({course}) => {
  return (
    <div>
    <Header name={course.name}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts} />
    </div>
  )
}

const Courses = ({ courses }) => {
  console.log(courses)
  return (
    <div>
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
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
      },
      {
        name: 'Test',
        id: 3,
        parts: [
          {
            name: 'lalal',
            exercises: 100,
            id: 1
          },
          {
            name: 'tataa',
            exercises: 10,
            id: 2
          }
        ]
      }
    ]
  

console.log(courses.map(heading => heading.name))
console.log(courses)
const singleCourse = courses.map(course => course.parts)
console.log(singleCourse)
const singlePart = courses.map(course => course.parts.map(courseName => courseName.name + ' ' + courseName.exercises))
console.log(singlePart)
const sumExercises = courses.map(course => course.parts.map(part => part.exercises)).reduce((accumulator, current) => accumulator + current)
console.log(sumExercises)

const coursesMap = courses.map(course => console.log(course))


  return (
  <div>  
  <Courses courses={courses} />
  </div>
)
}

export default App
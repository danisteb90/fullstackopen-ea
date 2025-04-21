//Course information, exercises 1.3 - 1.5

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part}: {props.excercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      {props.parts.map((part, index) => (
        <Part key={index} part={part.name} excercises={part.exercises} />
      ))}
    </>
  );
};

const Total = (props) => {
  const totalExcercises = props.parts.reduce(
    (acum, part) => acum + part.exercises,
    0
  );
  return <p>Total of exercises {totalExcercises}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;

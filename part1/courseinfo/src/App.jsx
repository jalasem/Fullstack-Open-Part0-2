import React from "react";

import Header from "./Header";
import Courses from "./Courses";
import Total from "./Total";

const App = () => {
  const course = "Half Stack application development";
  const parts = [
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
  ];

  return (
    <div>
      <Header course={course} />
      <Courses parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;

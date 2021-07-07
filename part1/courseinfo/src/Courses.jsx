import Course from "./Course";

const Courses = (props) => (
  <>
    {props.parts.map((part) => (
      <Course name={part.name} exercises={part.exercises} />
    ))}
  </>
);

export default Courses;

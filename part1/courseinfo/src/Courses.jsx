const Courses = (props) => (
  <>
    <p>
      {props.part1.name} {props.part1.exercises}
    </p>
    <p>
      {props.part2.name} {props.part2.exercises}
    </p>
    <p>
      {props.part3.name} {props.part3.exercises}
    </p>
  </>
);

export default Courses;

const Total = (props) => (
  <p>
    Number of exercises{" "}
    {props.parts.reduce((acc, cur) => acc + cur.exercises, 0)}
  </p>
);

export default Total;

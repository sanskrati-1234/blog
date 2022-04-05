function Student(props) {
  console.log(props.name);
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <h1>Hello {props.email}</h1>
    </div>
  );
}
export default Student;

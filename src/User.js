function User() {
  let data = "Sanskrati";
  function Apple() {
    data = "Sanchita";
    return <h1>Apple</h1>;
  }
  return (
    <div
      className="
    App"
    >
      <button onClick={Apple}>Click me</button>
      <h1>Hello {data}</h1>
    </div>
  );
}
export default User;

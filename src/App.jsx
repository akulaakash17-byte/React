function Main(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Age: {props.age}</h1>
    </div>
  );
}

function Parentfunc(props) {
  const age = 18;
  return (
    <>
      <Main name={props.name} age={age} />
    </>
  );
}

function child() {
  const name = "Akash";
  return (
    <>
      <Parentfunc name={name} />
    </>
  );
}

export default child;
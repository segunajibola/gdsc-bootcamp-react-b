function Details(props) {
  const name = "John";
  const age = 20;

  return (
    <p className="text-2xl">
      My name is {name} and I am {age} years old, I live in {props.state}.
    </p>
  );
}

export default Details;

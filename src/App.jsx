import Details from "./components/Details";
import Counter from "./components/Counter";
import Form from "./components/Form";
import ButtonEvents from "./components/ButtonEvents";

function App() {
  const state = "Lagos"
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="flex flex-col gap-5 items-center">
        <Details state={state} />
        <Counter />
        <Form />
        <ButtonEvents />
      </div>
    </div>
  );
}

export default App;

import Button from "./components/Button";

const handleButtonClick = (label: string) => {
  console.log(label);
};

function App() {
  return (
    <Button
      label={"Click me!"}
      onClick={handleButtonClick}
    />
  );
}

export default App;

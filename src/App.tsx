import { useState } from "react";

import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  function handleClick() {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  }

  return (
    <div>
      <h1>{pizza.name}</h1>
      <ul>
        {pizza.toppings.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Add topping</button>
    </div>
  );
}

export default App;

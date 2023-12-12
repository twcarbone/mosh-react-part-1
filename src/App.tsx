import { useState } from "react";

import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  function handleClick() {
    setGame({
      ...game,
      player: { ...game.player, name: "James" },
    });
  }

  return (
    <div>
      <p>{game.player.name}</p>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default App;

import { useEffect } from "react";

const connect = () => console.log("Connecting...");
const disconnect = () => console.log("Disconnecting...");

function App() {
  useEffect(() => {
    connect();

    // Returned function is called when effect hook completes.
    return () => disconnect();
  });

  return <div></div>;
}

export default App;

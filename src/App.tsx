import { useState } from "react";

import Message from "./components/Message";

function App() {
  return (
    // Each component will render twice while in development and in StrictMode
    <div>
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default App;

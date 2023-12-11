import { useState } from "react";

function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });

  function handleClick() {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  }

  return (
    <div>
      {customer.address.zipCode}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;

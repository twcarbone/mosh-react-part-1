import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/xusers",
        );
        setUsers(response.data);
      } catch (error) {
        setError((error as AxiosError).message);
      }
    }
    fetchUsers();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

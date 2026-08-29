import { useEffect, useState } from "react";

export default function APICallPage() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/",
        );
        const data = await response.json();
        setUsersData(data); // This is what you can access the data outside the state for rendering in return UI JSX
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchUsers();
  }, []); // => [] Dependancy Array

  return (
    <div>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>User List</h2>
        <ul>
          {usersData.map((user) => (
            <li key={user.id} style={{ marginBottom: "10px" }}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

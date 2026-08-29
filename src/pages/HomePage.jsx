import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function HomePage() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div>::Home Page::</div>
      {user ? <p>Welcome,{user.name}!</p> : <p>User is not logged in</p>}
      <p>Name: {user.name}</p>
    </>
  );
}

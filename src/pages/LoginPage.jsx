import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
  const [inputUserName, setInputUserName] = useState("");
  //const [user, setUser] = useState({ name: "", isAuth: false });
  const { user, login } = useContext(AuthContext);

  function handelSubmit(e) {
    e.preventDefault();
    if (!inputUserName.trim()) return;
    login(inputUserName);
  }

  return (
    <div style={{ padding: "0 1.5 rem" }}>
      <h2>Login</h2>
      <form onSubmit={handelSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="login name"
            value={inputUserName}
            onChange={(e) => setInputUserName(e.target.value)}
            style={{ marginLeft: "0.5rem" }}
          />
        </label>
        <button type="submit" style={{ marginLeft: "0.5rem" }}>
          Log In
        </button>
      </form>
      {user.isAuth && <p>user is logged in</p>}
    </div>
  );
}

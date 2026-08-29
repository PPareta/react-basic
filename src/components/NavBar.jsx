import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function NavBar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header
      style={{
        padding: "1rem 1.5rem",
        marginBottom: "1rem",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/httpapi" className="navbar-link">
            API Call
          </Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
          <div>
            {user.isAuth ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

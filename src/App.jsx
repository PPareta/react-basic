// https://www.youtube.com/watch?v=Wt3isV2irrA&t=12532s
// Chapter-5 (Router)
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import SignUpForm from "./components/SignUpForm";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import { AuthContext } from "./context/AuthContext";
import APICallPage from "./pages/APICallPage";

function App() {
  const [user, setUser] = useState({ name: "", isAuth: false });

  function login(userName) {
    setUser({ name: userName, isAuth: true });
  }

  function logout() {
    setUser({ name: "", isAuth: false });
  }

  return (
    <div>
      <AuthContext.Provider value={{ user, login, logout }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/httpapi" element={<APICallPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signupform" element={<SignUpForm />} />
          <Route path="*" element={<h1>Not Found - 404</h1>} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}
// COMPONET  = Function that returns JSX
export default App;

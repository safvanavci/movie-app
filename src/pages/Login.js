import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleLogin } from "../firebase/auth";
import { ToastContainer } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import { RiMovie2Line } from "react-icons/ri";

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loader, setLoader] = useState(true);

  const nav = useNavigate();

  const loading = () => {
    handleLogin(username, password, nav);
    setLoader(false);
    setTimeout(() => setLoader(true), 2500);
  };

  return (
    <div className="form-page">
      <ToastContainer theme="dark" />

      <div className="form">
        <Link to="/" className="logo">
          <RiMovie2Line size={40} />
          <h1>Movie</h1>
        </Link>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={loading} disabled={loader === false}>
          {loader === false ? (
            <ThreeDots height="40" width="40" radius="9" color="#fff" />
          ) : (
            "Sign Up"
          )}
        </button>
        <div className="links">
          <p>
            Don’t have an account yet?
            <Link className="link" to="/register">
              Sign up for free.
            </Link>
          </p>
          <Link to="/" className="link">
            Back to home?
          </Link>
        </div>
      </div>
    </div>
  );
}

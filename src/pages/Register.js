import { Link, useNavigate } from "react-router-dom";
import { RiMovie2Line } from "react-icons/ri";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { handleSignUp } from "../firebase/auth";
import { ThreeDots } from "react-loader-spinner";

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loader, setLoader] = useState(true);

  const navigate = useNavigate();

  const loading = () => {
    handleSignUp(username, password, confirm, navigate);
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
        <input
          type="password"
          placeholder="Confirm your Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
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
            Already got an account?
            <Link className="link" to="/login">
              Log in
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

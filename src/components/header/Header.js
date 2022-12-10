import "../../styles/header/header.scss";
import { RiMovie2Line } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { MainContext } from "../../context/context";
import Search from "./Search";

export default function Header() {
  const [profile, setProfile] = useState(false);

  const { loggedIn } = useContext(MainContext);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
  };

  return (
    <div className="header">
      <div className="container">
        <Link to="/" className="logo">
          <RiMovie2Line />
          <h1>Movie</h1>
        </Link>

        <Search />

        {loggedIn === null ? (
          <div>
            <Link to="login" className="sign-in">
              Sign in
            </Link>
            <Link to="register" className="sign-up">
              Sign Up
            </Link>
          </div>
        ) : (
          <div className="profile">
            <div
              className="icon"
              onMouseEnter={() => setProfile(true)}
              onMouseLeave={() => setProfile(false)}
              onClick={() => setProfile(true)}
            >
              <FaUserCircle size={25} />
            </div>
            <div
              className={profile ? "popover" : "popover-hidden"}
              onMouseEnter={() => setProfile(true)}
              onMouseLeave={() => setProfile(false)}
            >
              <Link to={"/profile"} className="profil">
                Profile
              </Link>
              <Link className="logout" onClick={handleLogout}>
                Logout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

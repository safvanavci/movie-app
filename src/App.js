import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import { MainContext } from "./context/context";
import { getUser } from "./firebase/getuser";

function App() {
  const [user, setUser] = useState({});
  
  const loggedIn = localStorage.getItem("loggedIn");

  const { pathname } = useLocation();

  const data = {
    user,
    setUser,
    loggedIn,
  };

  const hideFooter = () =>
    pathname === "/login" || pathname === "/register" ? null : <Footer />;

  const hideHeader = () =>
    pathname === "/login" || pathname === "/register" ? null : <Header />;

  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    goTop();
    getUser(setUser, loggedIn);
  }, [pathname]);

  return (
    <MainContext.Provider value={data}>
      <div>
        {hideHeader()}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="register" element={<Register />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        {hideFooter()}
      </div>
    </MainContext.Provider>
  );
}

export default App;

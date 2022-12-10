import React, { useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { MainContext } from "../context/context";
import { removeList } from "../firebase/addlist";
import { getUser } from "../firebase/getuser";
import { FaUserCircle } from "react-icons/fa";

export default function Profile() {
  const { user, loggedIn, setUser } = useContext(MainContext);

  const handleRemove = async (movie) => {
    await removeList(movie);
    getUser(setUser, loggedIn);
  };

  return (
    <>
      {loggedIn === null ? (
        <Navigate to={"/login"} />
      ) : (
        <div className="profile-page">
          <div className="user">
            <FaUserCircle size={45} />
            <h1>{user?.username} </h1>
          </div>
          <div className="watchlist">
            <h1>My Watchlist</h1>
            {user.list?.length === 0 ? (
              <div className="none-object">
                You haven't added anything to your list yet
              </div>
            ) : (
              <div className="list">
                {user.list?.map((movie) => (
                  <div key={movie.id} className="list-movie">
                    <Link to={`/movie/${movie.id}`}>
                      <img src={movie.img} alt="" />
                    </Link>
                    <div>
                      <p>{movie.name}</p>
                      <button onClick={() => handleRemove(movie)}>
                        Remove from list
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

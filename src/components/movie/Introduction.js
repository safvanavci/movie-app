import { useContext } from "react";
import { MainContext } from "../../context/context";
import { addList } from "../../firebase/addlist";
import { getUser } from "../../firebase/getuser";
import { ToastContainer } from "react-toastify";
import StarRatings from "react-star-ratings";
import { BiAddToQueue, BiCheck } from "react-icons/bi";

export default function Introduction({ movie, rate }) {
  const { loggedIn, user, setUser } = useContext(MainContext);

  const patch = user?.list.find((id) => id.id === movie.id);

  const handleAddList = () => {
    addList(movie);
    getUser(setUser, loggedIn);
  };

  return (
    <div className="introduction">
      <ToastContainer theme="dark" />

      <div className="backdrop">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt=""
        />
      </div>
      <div className="container">
        <div className="movie">
          <div className="overview">
            <h1>{movie.title}</h1>
            <div className="link-to-homepage">
              {movie.homepage !== "" && (
                <a className="homepage" href={movie.homepage} target="blank">
                  Homepage
                </a>
              )}
            </div>
            <StarRatings
              rating={rate}
              starRatedColor="#ff6b59"
              numberOfStars={5}
              starDimension="30px"
              starSpacing="1px"
              starEmptyColor="transparent"
            />
            <p>{movie.vote_count} Votes</p>
            <div className="flex">
              <div className="imdb">IMDb</div>
              <div className="quality">4K</div>
            </div>

            <p>{movie.overview}</p>

            <div className="genre">
              {movie.genres?.map((type) => (
                <div key={type.id}>
                  <p> {type.name}</p>
                </div>
              ))}
            </div>
            <p>{movie.release_date}</p>
            {!loggedIn ? (
              ""
            ) : (
              <div>
                {patch ? (
                  <button>
                    <BiCheck size={25} />
                    Added
                  </button>
                ) : (
                  <button onClick={handleAddList}>
                    <BiAddToQueue size={25} />
                    Add List
                  </button>
                )}
              </div>
            )}
          </div>
          <div className="poster">
            <img
              className="poster-image"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

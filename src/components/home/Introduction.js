import { useEffect, useState } from "react";
import { axios, StarRatings } from "./";
import { AiFillPlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Introduction() {
  const [movie, setMovie] = useState({});
  const [rate, setRate] = useState(0);

  const getMovie = async () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `${baseUrl}trending/movie/day?api_key=${apiKey}`;

    const response = await axios.get(url);
    const randomIndex = Math.floor(
      Math.random() * response.data.results.length
    );
    setRate(response.data.results[randomIndex].vote_average / 2);
    setMovie(response.data.results[randomIndex]);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="introduction">
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
            <div>
              <Link to={`/movie/${movie.id}`}>
                <button>
                  <AiFillPlayCircle size={25} />
                  WATCH TRAILER
                </button>
              </Link>
            </div>
          </div>

          <div className="poster">
            <img
              className="poster-image"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt=""
            />
            <h1>Recommand</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

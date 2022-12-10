import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

export default function Search() {
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState("");

  const { pathname } = useLocation();

  const getMovies = async () => {
    const url = `${process.env.REACT_APP_BASE_URL}search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`;
    if (!value) {
      return;
    } else {
      const { data } = await axios.get(url);
      setMovies(data.results.slice(0, 10));
    }
  };
  const clearValue = () => {
    setValue("");
  };

  useEffect(() => {
    getMovies();
  }, [value]);

  useEffect(() => {
    clearValue();
  }, [pathname]);

  return (
    <div className="search">
      <input
        type="text"
        value={value}
        className={value === "" ? "deneme" : "search-bar"}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Find Your Love Movies"
      />
      <div className={value === "" ? "hidden-bar" : "movies-bar"}>
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="movie">{movie.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

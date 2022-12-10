import { useEffect, useState } from "react";
import { axios } from "../index";
import Movie from "./Movie";

export default function Upcoming() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const url = `${process.env.REACT_APP_BASE_URL}movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=2`;

    const { data } = await axios.get(url);
    setMovies(data.results.splice(12));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="section-upcoming">
      <h1 className="title">Upcoming</h1>
      <div className="box">
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

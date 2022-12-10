import { Link } from "react-router-dom";

export default function Movie({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="movie">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt=""
        />
        <div className="explanation">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>{movie.release_date}</p>
          <div className="xy">
            <div className="imbd">IMBd</div>
            <div className="quality">4K</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

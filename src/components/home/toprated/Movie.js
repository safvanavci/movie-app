import { StarRatings } from "../index";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export default function Movie({ movie }) {
  return (
    <SwiperSlide>
      <div className="movie">
        <h1 className="rate">{movie.vote_average}</h1>
        <Link to={`/movie/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
          />
        </Link>
        <p className="title">{movie.title}</p>
        <StarRatings
          rating={movie.vote_average / 2}
          starRatedColor="#ff6b59"
          numberOfStars={5}
          starDimension="12px"
          starSpacing="1px"
          starEmptyColor="transparent"
        />
        <p className="date">{movie.release_date}</p>

        <div className="overview">{movie.overview}</div>
      </div>
    </SwiperSlide>
  );
}

import { Movie, axios } from "../index";
import { useEffect, useState } from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper";

export default function Popular() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const url = `${process.env.REACT_APP_BASE_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=2`;

    const { data } = await axios.get(url);
    setMovies(data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="popular-slide">
      <div className="slides">
        <Swiper
          modules={[Autoplay, Mousewheel]}
          spaceBetween={20}
          mousewheel={{ draggable: true }}
          autoplay={{ delay: 1100 }}
          loop={false}
          slidesPerView={6}
        >
          <h1 className="top-rated">Popular</h1>

          <div className="swiper-wrapper">
            {movies.map((movie) => (
              <Movie movie={movie} key={movie.id} />
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
}

import { Movie, axios } from "../../home";
import { useEffect, useState } from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper";

export default function TopRated() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const url = `${process.env.REACT_APP_BASE_URL}movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;

    const { data } = await axios.get(url);
    setMovies(data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="slide">
      <div className="slides">
        <Swiper
          modules={[Autoplay, Mousewheel]}
          spaceBetween={20}
          mousewheel={{ draggable: true }}
          autoplay={{ delay: 1000 }}
          loop={false}
          slidesPerView={6}
        >
          <h1 className="top-rated">Top Rated</h1>

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

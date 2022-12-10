import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Introduction from "../components/movie/Introduction";

export default function Movie() {
  const [movie, setMovie] = useState({});
  const [video, setVideo] = useState([]);
  const [rate, setRate] = useState(2);
  const [type, setType] = useState("");

  const { id } = useParams();

  const getMovie = async () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const apiKey = process.env.REACT_APP_API_KEY;
    const urlRes = `${baseUrl}movie/${id}?api_key=${apiKey}&language=en-US`;
    const urlVideo = `${baseUrl}movie/${id}/videos?api_key=${apiKey}&language=en-US`;

    const response = await axios.get(urlRes);
    const video = await axios.get(urlVideo);

    setMovie(response.data);
    setVideo(video.data.results);
    setRate(response.data.vote_average / 2);
    setType(video.data.results.length === 0 ? "" : video.data.results[0].key);

  };

  useEffect(() => {
    getMovie();
  }, [id]);

  return (
    <div>
      <Introduction movie={movie} rate={rate} />
      <div className="trailer">
        <div className="types">
          {video?.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setType(vid.key)}
              className={type === vid.key ? "active" : ""}
            >
              {vid.type}
            </div>
          ))}
        </div>
        <iframe
          src={`https://www.youtube.com/embed/${type}`}
          title="video"
        ></iframe>
      </div>
    </div>
  );
}

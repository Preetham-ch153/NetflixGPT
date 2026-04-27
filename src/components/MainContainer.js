import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movieDetails = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movieDetails) return;
  const MainMovie = movieDetails[0];

  const { original_title, overview, id } = MainMovie;
  return (
    <div className="aspect-auto">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;

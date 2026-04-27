import { useSelector } from "react-redux";
import useTrailerPlaying from "./hooks/useTrailerPlaying";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies?.getMovieTrailer);
    
    useTrailerPlaying(movieId);
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&controls=0&rel=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;

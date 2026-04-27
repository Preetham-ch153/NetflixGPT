import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useTrailerPlaying = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?",
      API_OPTIONS,
    );
    const json = await data.json();

    const filteredData = json.results.filter(
      (video) => video.type === "Trailer",
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    console.log(trailer);
    dispatch(addMovieTrailer(trailer));
    const key = trailer.key;
    
  };
  useEffect(() => {
    getMovieVideos();
  }, []);

}

export default useTrailerPlaying;
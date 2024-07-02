import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-52 relative z-20">
          <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <Movielist title={"Trending"} movies={movies.nowPlayingMovies} />
          <Movielist title={"Popular"} movies={movies.popularMovies} />
          <Movielist
            title={"Upcoming Movies"}
            movies={movies.nowPlayingMovies}
          />
          <Movielist title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;

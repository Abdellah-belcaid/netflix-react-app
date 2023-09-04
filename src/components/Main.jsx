import axios from "axios";
import React, { useEffect, useState } from "react";
import tmdbUrls from "../Service/Requests";

function Main() {
  const [movies, setMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    axios.get(tmdbUrls.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setRandomMovie(movies[randomIndex]);
    }
  }, [movies]);

  const truncateString = (str, num) => {
    return str?.length > num ? str.slice(0, num) + " ..." : str;
  };

  return (
    <div className="w-full h-[550px] text-white ">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r  from-black/75 "></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
          alt={randomMovie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold ">
            {randomMovie?.title}
          </h1>
          <div className="my-4">
            <button className="border  bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Watch later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released : {randomMovie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            Overview : {truncateString(randomMovie?.overview, 200)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;

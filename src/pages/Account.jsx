import React from "react";
import SavedMovies from "../components/SavedMovies";

function Account() {
  return (
    <>
      <div className="w-full text-white">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/296ecda9-4029-48ae-aeac-8f88c3fe3e66/MA-en-20230828-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
          className="w-full h-[400px] object-cover "
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8 ">
          <h1 className="text-3xl md:text-5xl font-bold ">My Shows</h1>
        </div>
      </div>
      <SavedMovies />
    </>
  );
}

export default Account;

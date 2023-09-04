import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import tmdbUrls from "../Service/Requests";

function Home() {
  return (
    <div>
      <Main />
      <Row rowId="1" title={"Up Coming"} fetchUrl={tmdbUrls.requestUpcoming} />
      <Row rowId="2" title={"Top Rated"} fetchUrl={tmdbUrls.requestTopRated} />
      <Row rowId="3" title={"Popular"} fetchUrl={tmdbUrls.requestPopular} />
      <Row
        rowId="4"
        title={"Now Playing"}
        fetchUrl={tmdbUrls.requestNowPlaying}
      />
    </div>
  );
}

export default Home;

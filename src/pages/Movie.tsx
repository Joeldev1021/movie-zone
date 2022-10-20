import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDetailsMovie } from "../hooks/useDetailMovie";

function Movie() {
  const { id } = useParams();
  const [videos, loadingVideos] = useDetailsMovie({
    path: `/movie/${id}/videos`,
  });
  const [creditsMovie] = useDetailsMovie({ path: `/movie/${id}/credits` });
  const [similarMovie] = useDetailsMovie({ path: `/movie/${id}/similar` });
  console.log("videos", videos);
  console.log("credits", creditsMovie);
  console.log("similarMovie", similarMovie);
  return (
    <div>
      <h1>movie id: {id}</h1>
      {loadingVideos === false && (
        <iframe
          title={videos.results[1].title}
          src={`https://www.youtube.com/embed/${videos.results[1].key}`}
          frameBorder={0}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}

export default Movie;

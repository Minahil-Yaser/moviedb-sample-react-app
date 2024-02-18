import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import "./css/movieDetails.css";
import "./css/loader.css";

const TVDetails = ({ TMDB_API_KEY }) => {
  const { id } = useParams();

  const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${TMDB_API_KEY}`;
  const url2 = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${TMDB_API_KEY}`;
  const url3 = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${TMDB_API_KEY}`;
  const url4 = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${TMDB_API_KEY}`;

  const { data: tv, res_status: res_status1 } = useFetch(url);
  const { data: recmds, res_status: res_status2 } = useFetch(url2);
  const { data: credits, res_status: res_status3 } = useFetch(url3);
  const { data: videos, res_status: res_status4 } = useFetch(url4);

  console.log("D1", tv);
  console.log("D2", recmds);
  console.log("D3", credits);
  console.log("D4", videos);

  if (tv === null || recmds === null || credits === null || videos === null) {
    return (
      <>
        <div className="loadscreen">
          {" "}
          <div className="loader"></div>
        </div>
      </>
    );
  } else {
    if (
      res_status1 === 200 &&
      res_status2 === 200 &&
      res_status3 === 200 &&
      res_status4 === 200
    ) {
      return (
        <>
          {tv && (
            <>
              <div
                className="container first"
                style={{ backgroundColor: "#d6d6d6" }}
              >
                <div
                  className="containerH"
                  style={{ minHeight: "300px", marginLeft: "30px" }}
                >
                  {tv.backdrop_path && (
                    <img
                      className="backdrop"
                      src={
                        "https://image.tmdb.org/t/p/w500/" + tv.backdrop_path
                      }
                      alt="..."
                    />
                  )}
                  {!tv.backdrop_path && <h2>No preview backdrop image *_*</h2>}
                </div>

                <div className="movInfo">
                  <h2> {tv.name}</h2>
                  {tv["genres"].map((res, index01) => {
                    return (
                      <>
                        <h6 key={index01} style={{ display: "inline-block" }}>
                          {" "}
                          {res.name} |{" "}
                        </h6>
                      </>
                    );
                  })}
                  <h4>
                    <b>{tv.tagline}</b>
                  </h4>
                  <h4>
                    Total Votes: <b>{tv.vote_count}</b> | Vote Score:{" "}
                    <b>{tv.vote_average}</b> | Popularity:{" "}
                    <b>{tv.popularity}</b>
                  </h4>
                  <h4>
                    Air Date: <b>{tv.first_air_date}</b>
                  </h4>
                  <h4>
                    Episode Duration: <b>{tv.episode_run_time} minutes</b>
                  </h4>
                  <h4>Production Companies:</h4>
                  {tv["production_companies"].map((res, index0) => {
                    return (
                      <>
                        <h6 key={index0} style={{ display: "inline-block" }}>
                          {" "}
                          {res.name} |{" "}
                        </h6>
                      </>
                    );
                  })}
                </div>

                <div className="overview">
                  <h3>Overview</h3>
                  <p>{tv.overview}</p>
                </div>

                <div className="budget">
                  <h3>Seasons and Episodes</h3>
                  <p>
                    <b>Total Seasons:</b> {tv.number_of_seasons}
                  </p>
                  <p>
                    <b>Total Episodes:</b> {tv.number_of_episodes}
                  </p>
                  <h3>Official Homepage</h3>
                  {tv.homepage && (
                    <>
                      {" "}
                      <a href={tv.homepage} style={{ color: "black" }}>
                        {tv.homepage}
                      </a>
                    </>
                  )}
                </div>

                <img
                  className="poster"
                  src={"https://image.tmdb.org/t/p/w200/" + tv.poster_path}
                  alt="..."
                />

                <div className="cast">
                  <h2>Seasons</h2>
                </div>

                <div className="scrolling-wrapper">
                  {tv["seasons"].map((season, index00) => {
                    return (
                      <>
                        <div key={index00} className="flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              {season.poster_path && (
                                <img
                                  style={{ borderRadius: 15 }}
                                  src={
                                    "https://image.tmdb.org/t/p/w200/" +
                                    season.poster_path
                                  }
                                  alt="..."
                                />
                              )}
                            </div>
                            <div className="flip-card-back">
                              <br></br>
                              <h4>{season.name}</h4>
                              <br></br>
                              <h4>Air Date:</h4>
                              <p>{season.air_date}</p>
                              <br></br>
                              <h4>Episode Count: {season.episode_count}</h4>
                              <br></br>
                              <a
                                href={
                                  "/moviedb-sample-react-app/tv/" +
                                  tv.id +
                                  "/season/" +
                                  season.season_number
                                }
                                className="btn1"
                              >
                                View Details
                              </a>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>

                <div className="cast">
                  <h2>Cast</h2>
                </div>

                <div className="scrolling-wrapper">
                  {credits["cast"].map((cast, index1) => {
                    return (
                      <>
                        <div key={index1} className="flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              {cast.profile_path && (
                                <img
                                  style={{ borderRadius: 15 }}
                                  src={
                                    "https://image.tmdb.org/t/p/w200/" +
                                    cast.profile_path
                                  }
                                  alt="..."
                                />
                              )}
                            </div>
                            <div className="flip-card-back">
                              <br></br>
                              <h4>{cast.name}</h4>
                              <br></br>
                              <h4>Character Name:</h4>
                              <p>{cast.character}</p>
                              <br></br>
                              <h4>Known for {cast.known_for_department}</h4>
                              <br></br>
                              <a href={"/moviedb-sample-react-app/person/" + cast.id} className="btn1">
                                View Details
                              </a>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>

                <div className="cast">
                  <br></br>
                  <h2>Crew</h2>
                </div>

                <div className="scrolling-wrapper">
                  {credits["crew"].map((crew, index2) => {
                    return (
                      <>
                        <div key={index2} className="flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              {crew.profile_path && (
                                <img
                                  style={{ borderRadius: 15 }}
                                  src={
                                    "https://image.tmdb.org/t/p/w200/" +
                                    crew.profile_path
                                  }
                                  alt="..."
                                />
                              )}
                            </div>
                            <div className="flip-card-back">
                              <br></br>
                              <h4>{crew.name}</h4>
                              <br></br>
                              <h4>Character Name:</h4>
                              <p>{crew.character}</p>
                              <br></br>
                              <h4>Known for {crew.known_for_department}</h4>
                              <br></br>
                              <a href={"/moviedb-sample-react-app/person/" + crew.id} className="btn1">
                                View Details
                              </a>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>

                <div className="cast">
                  <br></br>
                  <h2>Trailer and Short Videos</h2>
                </div>
                <div className="scrolling-wrapper">
                  {videos["results"].map((video, index3) => {
                    return (
                      <>
                        <div key={index3} className="col-sm-6">
                          <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                              className="embed-responsive-item"
                              src={"https://www.youtube.com/embed/" + video.key}
                              title="videos"
                            ></iframe>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>

                <div className="cast">
                  <br></br>
                  <h2>Recommended TV Shows</h2>
                </div>
                <div className="scrolling-wrapper">
                  {recmds["results"] &&
                    recmds["results"].map((rec, index4) => {
                      return (
                        <>
                          <div key={index4} className="flip-card">
                            <div className="flip-card-inner">
                              <div className="flip-card-front">
                                <img
                                  style={{ borderRadius: 15 }}
                                  src={
                                    "https://image.tmdb.org/t/p/w200/" +
                                    rec.poster_path
                                  }
                                  alt="No preview"
                                />
                              </div>

                              <div className="flip-card-back">
                                {rec.media_type === "tv" && (
                                  <>
                                    <br></br>
                                    <h3>{rec.title}</h3>
                                    <br></br>
                                    <p>Media Type: tv</p>
                                    <p>Release Date: {rec.release_date}</p>
                                    <p>Popularity: {rec.popularity}</p>
                                    <br></br>
                                    <button className="btn1">
                                      <a
                                        style={{ color: "#d6d6d6" }}
                                        href={"/moviedb-sample-react-app/tv/" + rec.id}
                                      >
                                        View Details
                                      </a>
                                    </button>
                                  </>
                                )}
                                {rec.media_type === "tv" && (
                                  <>
                                    <br></br>
                                    <h3>{rec.name}</h3>
                                    <br></br>
                                    <p>Media Type: TV</p>
                                    <p>Release Date: {rec.first_air_date}</p>
                                    <p>Popularity: {rec.popularity}</p>
                                    <br></br>
                                    <button className="btn1">
                                      <a
                                        style={{ color: "#d6d6d6" }}
                                        href={"/moviedb-sample-react-app/tv/" + rec.id}
                                      >
                                        View Details
                                      </a>
                                    </button>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
                <br></br>
                <br></br>
              </div>
            </>
          )}
        </>
      );
    } else {
      return (
        <>
          <h2>Something Went Wrong</h2>
        </>
      );
    }
  }
};

export default TVDetails;

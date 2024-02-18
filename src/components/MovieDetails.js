import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import "./css/loader.css";
import "./css/movieDetails.css";

const MovieDetails = ({ TMDB_API_KEY }) => {
  const { id } = useParams();

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}`;
  const url2 = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${TMDB_API_KEY}`;
  const url3 = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${TMDB_API_KEY}`;
  const url4 = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${TMDB_API_KEY}`;

  const { data: movie, res_status: res_status1 } = useFetch(url);
  const { data: recmds, res_status: res_status2 } = useFetch(url2);
  const { data: credits, res_status: res_status3 } = useFetch(url3);
  const { data: videos, res_status: res_status4 } = useFetch(url4);

  console.log("D1", movie);
  console.log("D2", recmds);
  console.log("D3", credits);
  console.log("D4", videos);

  if (
    movie === null ||
    recmds === null ||
    credits === null ||
    videos === null
  ) {
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
          {movie && (
            <>
              <div
                className="container first"
                style={{ backgroundColor: "#d6d6d6" }}
              >
                <div className="containerH" style={{ minHeight: "300px", marginLeft:"30px" }}>
                  {movie.backdrop_path && (
                    <img
                      className="backdrop"
                      src={
                        "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path
                      }
                      alt="..."
                    />
                  )}
                  {!movie.backdrop_path && <h2>No preview backdrop image *_*</h2>}
                </div>

                <div className="movInfo">
                  <h2> {movie.title}</h2>
                  {movie["genres"].map((res, index01) => {
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
                    <b>{movie.tagline}</b>
                  </h4>
                  <h4>
                    Total Votes: <b>{movie.vote_count}</b> | Vote Score:{" "}
                    <b>{movie.vote_average}</b> | Popularity:{" "}
                    <b>{movie.popularity}</b>
                  </h4>
                  <h4>
                    Release Date: <b>{movie.release_date}</b>
                  </h4>
                  <h4>
                    Duration: <b>{movie.runtime} minutes</b>
                  </h4>
                  <h4>Production Companies:</h4>
                  {movie["production_companies"].map((res, index0) => {
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
                  <p>{movie.overview}</p>
                </div>

                <div className="budget">
                  <h3>Budget and Revenue</h3>
                  <p>
                    <b>Budget:</b> {movie.budget}$
                  </p>
                  <p>
                    <b>Revenue:</b> {movie.revenue}$
                  </p>
                  <h3>Official Homepage</h3>
                  {movie.homepage && (
                    <>
                      {" "}
                      <a href={movie.homepage} style={{ color: "black" }}>
                        {movie.homepage}
                      </a>
                    </>
                  )}
                </div>

                {movie.poster_path && (
                  <img
                    className="poster"
                    src={"https://image.tmdb.org/t/p/w200/" + movie.poster_path}
                    alt="..."
                  />
                )}

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
                  {!videos["results"] && <p>No content available.</p>}
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
                  <h2>Recommended Movies</h2>
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
                                {rec.media_type === "movie" && (
                                  <>
                                    <br></br>
                                    <h3>{rec.title}</h3>
                                    <br></br>
                                    <p>Media Type: Movie</p>
                                    <p>Release Date: {rec.release_date}</p>
                                    <p>Popularity: {rec.popularity}</p>
                                    <br></br>
                                    <button className="btn1">
                                      <a
                                        style={{ color: "#d6d6d6" }}
                                        href={"/moviedb-sample-react-app/movie/" + rec.id}
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

export default MovieDetails;

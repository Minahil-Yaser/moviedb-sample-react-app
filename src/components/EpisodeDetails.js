import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import "./css/loader.css";
import "./css/movieDetails.css";

const EpisodeDetails = ({ TMDB_API_KEY }) => {
  const { id } = useParams();
  const { season_number } = useParams();
  const { episode_number } = useParams();

  const url = `https://api.themoviedb.org/3/tv/${id}/season/${season_number}/episode/${episode_number}?api_key=${TMDB_API_KEY}`;

  const { data, res_status } = useFetch(url);
  console.log("id", id);
  console.log("sn", season_number);
  console.log("en", episode_number);

  if (data === null) {
    return (
      <>
        <div className="loadscreen">
          {" "}
          <div className="loader"></div>
        </div>
      </>
    );
  } else {
    if (res_status === 200) {
      return (
        <>
          <div
            className="container first"
            style={{ backgroundColor: "#d6d6d6" }}
          >
            <div
              className="containerH"
              style={{ minHeight: "300px", marginLeft: "30px" }}
            >
              {data.still_path && (
                <img
                  className="backdrop"
                  src={"https://image.tmdb.org/t/p/w500/" + data.still_path}
                  alt="..."
                />
              )}
              {!data.still_path && <h2>No preview backdrop image *_*</h2>}
            </div>

            <div className="movInfo">
              <h2> {data.name}</h2>
              <h4>Season: {data.season_number}</h4>
              <h4>Episode: {data.episode_number}</h4>
              <h4>Air Date: {data.air_date}</h4>
              <h4>
                Total Votes: <b>{data.vote_count}</b> | Vote Score:{" "}
                <b>{data.vote_average}</b> |
              </h4>
            </div>
            <div className="overview">
              <h3>Overview</h3>
              <p>{data.overview}</p>
            </div>

            <div className="cast">
              <h2>Guest Stars</h2>
            </div>

            <div className="scrolling-wrapper">
              {data["guest_stars"].map((cast, index1) => {
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
              <h2>Crew</h2>
            </div>

            <div className="scrolling-wrapper">
              {data["crew"].map((cast, index1) => {
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
          </div>
          <br></br>
          <br></br>
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

export default EpisodeDetails;

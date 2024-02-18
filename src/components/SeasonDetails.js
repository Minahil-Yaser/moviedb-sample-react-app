import useFetch from "./useFetch";
import "./css/seasonDetails.css";
import "./css/loader.css";
import { useParams } from "react-router-dom";

const SeasonDetails = ({ TMDB_API_KEY }) => {
  const { id } = useParams();
  const { season_number } = useParams();

  const url = `https://api.themoviedb.org/3/tv/${id}/season/${season_number}?api_key=${TMDB_API_KEY}&language=en-US`;

  const { data, res_status } = useFetch(url);

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
          <h2 style={{ marginLeft: "640px", marginTop: "50px" }}>Episodes</h2>
          <br></br>
          <br></br>
          <div className="container first">
            <div className="row ten-columns"></div>
            {data.episodes && (
              <>
                {data["episodes"].map((res, index01) => {
                  return (
                    <>
                      <div key={index01} className="column">
                        <div className="flip-card1">
                          <div className="flip-card1-inner">
                            <div className="flip-card1-front">
                              {res.still_path && (
                                <img
                                  style={{ borderRadius: 15 }}
                                  src={
                                    "https://image.tmdb.org/t/p/w300" +
                                    res.still_path
                                  }
                                  alt="..."
                                />
                              )}
                            </div>

                            <div className="flip-card1-back">
                              <br></br>
                              <h4>Episode: {res.episode_number}</h4>
                              <h5>{res.name}</h5>
                              <br></br>

                              <a
                                href={
                                  "/moviedb-sample-react-app/tv/" +
                                  id +
                                  "/season/" +
                                  res.season_number +
                                  "/episode/" +
                                  res.episode_number
                                }
                                className="btn1"
                              >
                                View Details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}

                {!data["episodes"] && (
                  <div class="noresult">No Results Found!</div>
                )}
              </>
            )}
          </div>
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

export default SeasonDetails;
